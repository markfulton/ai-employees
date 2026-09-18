#!/usr/bin/env node
/*
 * review.mjs
 * The member's review page for creative sets, and the only writer of
 * creative/approvals.jsonl other than the member's own editor.
 *
 * Why this script exists: a creative set used to wait on a board tick, and a
 * set the member did not like sat in the only open slot until somebody
 * archived it by hand. An approval is now a row bound to the exact content
 * it approved, a rejection closes the slot, and three facts that used to
 * collapse into one word are shown apart: approved, published, delivering.
 *
 * Requires Node 18 or newer. No dependencies, no package.json, no install.
 * Runs the same on Windows and POSIX. Makes no network call of its own.
 *
 * USAGE
 *   node scripts/review.mjs --serve [--port 8770]
 *       Serves the review page on the loopback address only. Approve, reject,
 *       needs revision and withdraw are one click each, and every label on the
 *       page is read from the files on disk after each click. Nothing on this
 *       page calls an ad platform.
 *
 *   node scripts/review.mjs --catalog [--json]
 *       Prints every set with its revision, its review status, its publication
 *       status and its delivery status. Routines read this instead of parsing
 *       the ledgers themselves.
 *
 *   node scripts/review.mjs --record --set creative/set-YYYY-MM-DD-slug \
 *        --status approved|rejected|needs-revision|withdrawn [--note "..."]
 *       Appends one review row from a terminal, for a member who prefers the
 *       keyboard. The revision is computed from the files as they are now.
 *
 *   node scripts/review.mjs --selftest
 *   node scripts/review.mjs --help
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent
 *                   folder, then the ADS_ROOT environment variable.
 *
 * WHAT A ROW LOOKS LIKE, in creative/approvals.jsonl
 *   {"set":"creative/set-2026-03-04-slug","revision":"<sha256>",
 *    "status":"approved","at":"<ISO>","by":"member","note":""}
 *
 *   status is one of approved, rejected, needs-revision, withdrawn.
 *   by is always "member": this page is the member's hand, and no routine
 *   ever appends a row here. A routine that finds a row it cannot trace to
 *   the member treats the set as awaiting review.
 *
 * WHAT THE REVISION COVERS
 *   The manifest set.md, every image file the manifest names, in sorted
 *   order, and the four money and destination lines of plan/offer.md. Any
 *   change to any of those gives a new revision, and an approval for an
 *   earlier revision reads as "changed" until the member reviews again.
 *
 * WHAT NEVER HAPPENS HERE
 *   No routine is started, no platform is called, no file other than
 *   creative/approvals.jsonl is written, and a published set cannot be
 *   withdrawn from this page: pausing a live ad is a change list line and a
 *   build desk action, not a review.
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import http from "node:http";
import { fileURLToPath } from "node:url";

const REVIEW_STATUSES = ["approved", "rejected", "needs-revision", "withdrawn"];
const OFFER_HEADINGS = ["Landing URL", "Countries sold into", "Daily cap", "Currency"];

function readText(p) {
  if (!fs.existsSync(p)) return "";
  return fs.readFileSync(p, "utf8").replace(/^﻿/, "");
}

function readRows(p) {
  const out = [];
  const text = readText(p);
  if (!text) return out;
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    try { out.push(JSON.parse(line)); } catch { out.push({ __malformed: i + 1 }); }
  }
  return out;
}

function section(text, heading) {
  const m = new RegExp("^## " + heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\r?\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))", "m").exec(text);
  return m ? m[1].trim() : "";
}

function scopeOf(root) {
  const offer = readText(path.join(root, "plan", "offer.md"));
  const scope = {};
  for (const h of OFFER_HEADINGS) scope[h] = section(offer, h);
  return scope;
}

function setFolders(root) {
  const dir = path.join(root, "creative");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((n) => /^set-\d{4}-\d{2}-\d{2}-[A-Za-z0-9_-]+$/.test(n))
    .filter((n) => fs.existsSync(path.join(dir, n, "set.md")))
    .sort()
    .map((n) => "creative/" + n);
}

function imagesOf(root, set) {
  const folder = path.join(root, set);
  return fs.readdirSync(folder)
    .filter((n) => /\.(png|jpe?g|webp)$/i.test(n))
    .sort();
}

function slotsOf(manifest) {
  const body = section(manifest, "Slots");
  return body.split(/\r?\n/).map((l) => l.replace(/^[-*]\s+/, "").trim()).filter(Boolean);
}

function revisionOf(root, set, scope) {
  const folder = path.join(root, set);
  const h = crypto.createHash("sha256");
  h.update(readText(path.join(folder, "set.md")));
  for (const img of imagesOf(root, set)) {
    h.update("\n" + img + "\n");
    h.update(fs.readFileSync(path.join(folder, img)));
  }
  h.update(JSON.stringify(scope));
  return h.digest("hex");
}

/*
 * The three facts, derived and never stored.
 *   review:      from creative/approvals.jsonl, bound to the revision
 *   publication: from build/publication-receipts.jsonl, the last receipt for the set
 *   delivery:    from metrics/daily.jsonl, the last row carrying the ad id
 */
export function catalog(root) {
  const scope = scopeOf(root);
  const approvals = readRows(path.join(root, "creative", "approvals.jsonl")).filter((r) => !r.__malformed);
  const receipts = readRows(path.join(root, "build", "publication-receipts.jsonl")).filter((r) => !r.__malformed);
  const metrics = readRows(path.join(root, "metrics", "daily.jsonl")).filter((r) => !r.__malformed);
  return setFolders(root).map((set) => {
    const manifest = readText(path.join(root, set, "set.md"));
    const revision = revisionOf(root, set, scope);
    const rows = approvals.filter((r) => r.set === set && r.by === "member");
    const latest = rows.length ? rows[rows.length - 1] : null;
    let review = "awaiting-review";
    if (latest) review = latest.revision === revision ? latest.status : "changed";
    const receipt = receipts.filter((r) => r.set === set).pop() || null;
    let publication = "unpublished";
    if (receipt && receipt.ad_id) publication = String(receipt.configured_status || "").toUpperCase() === "ACTIVE" ? "published" : "prepared";
    else if (receipt) publication = "in-progress";
    let delivery = { state: "not-observed", on: null, impressions: null };
    if (receipt && receipt.ad_id) {
      const rowsForAd = metrics.filter((m) => String(m.object_id) === String(receipt.ad_id)).sort((a, b) => String(a.date).localeCompare(String(b.date)));
      const last = rowsForAd.pop();
      if (last) delivery = { state: Number(last.impressions) > 0 ? "delivering" : "no-delivery", on: last.date || null, impressions: last.impressions ?? null };
    }
    const images = imagesOf(root, set);
    const slots = slotsOf(manifest);
    return {
      set,
      title: (manifest.split(/\r?\n/)[0] || "").replace(/^#\s*/, ""),
      revision,
      review,
      review_at: latest ? latest.at : null,
      review_note: latest && latest.revision === revision ? (latest.note || "") : "",
      publication,
      effective_status: receipt ? receipt.effective_status || null : null,
      receipt_url: receipt ? receipt.url || null : null,
      delivery,
      slots,
      images,
      reviewable: images.length > 0 && slots.length > 0,
      open: review !== "rejected" && review !== "withdrawn" && publication !== "published",
    };
  });
}

export function record(root, { set, status, note = "", revision = null }) {
  if (!REVIEW_STATUSES.includes(status)) throw new Error("status must be one of " + REVIEW_STATUSES.join(", "));
  const entry = catalog(root).find((c) => c.set === set);
  if (!entry) throw new Error("no such set: " + set);
  if (!entry.reviewable) throw new Error("set has no images or no slots yet, nothing to review");
  if (revision && revision !== entry.revision) throw new Error("the set changed since the page loaded; reload and review the new revision");
  if (status === "withdrawn" && entry.publication === "published") throw new Error("a published set cannot be withdrawn here; pausing a live ad is a change list line");
  if (status === "withdrawn" && entry.review !== "approved") throw new Error("only an approved set can be withdrawn");
  if (entry.review === status) return entry;
  const row = { set, revision: entry.revision, status, at: new Date().toISOString(), by: "member", note: String(note || "").slice(0, 500) };
  const file = path.join(root, "creative", "approvals.jsonl");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const existing = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  const prefix = existing.length && !existing.endsWith("\n") ? "\n" : "";
  fs.appendFileSync(file, prefix + JSON.stringify(row) + "\n", "utf8");
  return catalog(root).find((c) => c.set === set);
}

function esc(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function page(root) {
  const items = catalog(root);
  const chip = (label, value) => `<span class="chip ${esc(value)}">${esc(label)}: ${esc(value)}</span>`;
  const cards = items.map((it) => {
    const imgs = it.images.map((f) => `<img src="/${esc(it.set)}/${esc(f)}" alt="">`).join("");
    const slots = it.slots.map((s) => `<li>${esc(s)}</li>`).join("");
    const canReview = it.reviewable && it.publication !== "published";
    const buttons = canReview ? `
      <div class="actions">
        <button data-status="approved">Approve</button>
        <button data-status="needs-revision">Needs revision</button>
        <button data-status="rejected">Reject</button>
        ${it.review === "approved" ? `<button data-status="withdrawn">Withdraw approval</button>` : ""}
        <input type="text" placeholder="Note, one line, optional" maxlength="500">
      </div>` : `<p class="muted">${it.publication === "published" ? "Published. Pausing a live ad is a change list line, not a review." : "Not reviewable yet: the set needs at least one image and one slot."}</p>`;
    const delivery = it.delivery.state === "delivering" ? `delivering (${it.delivery.impressions} impressions on ${it.delivery.on})` : it.delivery.state;
    return `<article data-set="${esc(it.set)}" data-revision="${esc(it.revision)}">
      <h2>${esc(it.title || it.set)}</h2>
      <p class="path">${esc(it.set)} <code>${esc(it.revision.slice(0, 12))}</code></p>
      <p>${chip("review", it.review)} ${chip("publication", it.publication)}${it.effective_status ? " " + chip("platform", it.effective_status) : ""} ${chip("delivery", delivery)}</p>
      ${it.review_note ? `<p class="note">Note: ${esc(it.review_note)}</p>` : ""}
      ${it.receipt_url ? `<p><a href="${esc(it.receipt_url)}" target="_blank" rel="noopener">Open in the ad account</a></p>` : ""}
      <div class="images">${imgs}</div>
      <ul class="slots">${slots}</ul>
      ${buttons}
    </article>`;
  }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Creative review</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0;padding:24px;background:#f6f6f4;color:#1b1b1b}
h1{font-size:20px;margin:0 0 4px}
.lede{color:#555;margin:0 0 20px;font-size:14px}
article{background:#fff;border:1px solid #e2e2df;border-radius:10px;padding:16px 18px;margin:0 0 16px;max-width:980px}
h2{font-size:16px;margin:0 0 4px}
.path{color:#666;font-size:12px;margin:0 0 8px}
.chip{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;background:#eee;margin-right:4px}
.chip.approved,.chip.published,.chip.delivering{background:#dff3e4}
.chip.rejected,.chip.withdrawn{background:#f9dede}
.chip.needs-revision,.chip.changed,.chip.awaiting-review,.chip.prepared{background:#fff0c7}
.images{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0}
.images img{max-width:300px;max-height:300px;border:1px solid #ddd;border-radius:6px}
.slots{font-size:14px;padding-left:18px}
.actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}
.actions input{flex:1;min-width:220px;padding:6px 8px;border:1px solid #ccc;border-radius:6px}
button{padding:6px 12px;border:1px solid #bbb;border-radius:6px;background:#fafafa;cursor:pointer}
button:hover{background:#eee}
.muted{color:#777;font-size:13px}
.note{font-size:13px;color:#444}
#msg{color:#a00;font-size:13px;min-height:18px}
</style></head><body>
<h1>Creative review</h1>
<p class="lede">Three facts, kept apart: review is your decision, publication is what the build desk did, delivery is what the account read observed. Every label here is read from the files after each click.</p>
<div id="msg"></div>
<main>${cards || "<p class='muted'>No creative sets yet.</p>"}</main>
<script>
document.addEventListener("click", async (e) => {
  const b = e.target.closest("button[data-status]"); if (!b) return;
  const a = b.closest("article"); const note = a.querySelector("input") ? a.querySelector("input").value : "";
  b.disabled = true;
  try {
    const r = await fetch("/api/review", { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ set: a.dataset.set, revision: a.dataset.revision, status: b.dataset.status, note }) });
    const j = await r.json();
    if (!r.ok) { document.getElementById("msg").textContent = j.error || "Could not record the review."; b.disabled = false; return; }
    location.reload();
  } catch (err) { document.getElementById("msg").textContent = "The review page could not reach its own server."; b.disabled = false; }
});
</script></body></html>`;
}

function serve(root, port) {
  const host = "127.0.0.1";
  const origin = "http://" + host + ":" + port;
  const mime = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp" };
  const server = http.createServer(async (req, res) => {
    const send = (code, body, type) => {
      res.writeHead(code, { "Content-Type": type || "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
      res.end(type ? body : JSON.stringify(body));
    };
    try {
      const hostHeader = String(req.headers.host || "");
      if (hostHeader !== host + ":" + port && hostHeader !== "localhost:" + port) return send(403, { error: "local access only" });
      const url = new URL(req.url, origin);
      if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) return send(200, page(root), "text/html; charset=utf-8");
      if (req.method === "GET" && url.pathname === "/api/catalog") return send(200, catalog(root));
      if (req.method === "POST" && url.pathname === "/api/review") {
        const o = String(req.headers.origin || "");
        if (o !== origin && o !== "http://localhost:" + port) return send(403, { error: "same origin only" });
        let body = "";
        for await (const chunk of req) { body += chunk; if (body.length > 8192) return send(413, { error: "too large" }); }
        let parsed;
        try { parsed = JSON.parse(body); } catch { return send(400, { error: "bad JSON" }); }
        try { return send(200, record(root, parsed)); } catch (err) { return send(409, { error: err.message }); }
      }
      if (req.method !== "GET") return send(405, { error: "method not allowed" });
      const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
      const m = /^creative\/(set-\d{4}-\d{2}-\d{2}-[A-Za-z0-9_-]+)\/([A-Za-z0-9_.-]+\.(?:png|jpe?g|webp))$/i.exec(rel);
      if (!m) return send(404, { error: "not found" });
      const file = path.join(root, "creative", m[1], m[2]);
      if (!fs.existsSync(file)) return send(404, { error: "not found" });
      return send(200, fs.readFileSync(file), mime[path.extname(file).toLowerCase()] || "application/octet-stream");
    } catch {
      return send(500, { error: "the review page could not read its files" });
    }
  });
  server.listen(port, host, () => process.stdout.write("review page: " + origin + "\n"));
  return server;
}

function selftest() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ads-review-"));
  let failures = 0;
  const check = (name, ok) => { process.stdout.write((ok ? "  ok    " : "  FAIL  ") + name + "\n"); if (!ok) failures++; };
  try {
    fs.mkdirSync(path.join(root, "plan"), { recursive: true });
    fs.writeFileSync(path.join(root, "plan", "offer.md"), "# Offer\n\n## Landing URL\nhttps://example.com/pricing\n\n## Countries sold into\nUS, GB\n\n## Daily cap\n20\n\n## Currency\nUSD\n");
    const set = "creative/set-2026-03-04-fast-estimate";
    fs.mkdirSync(path.join(root, set), { recursive: true });
    fs.writeFileSync(path.join(root, set, "set.md"), "# Creative set: fast estimate, produced 2026-03-04\n\n## Slots\n- Primary text, a: Get a quote in a day, 20, cap 125\n- Headline, a: Same day estimate, 17, cap 40\n\n## Images\n- hero.png, 1080x1080, 12 bytes, 1x1\n");
    fs.writeFileSync(path.join(root, set, "hero.png"), Buffer.from("not-an-image"));

    let c = catalog(root);
    check("catalog lists the set", c.length === 1 && c[0].set === set);
    check("a set with no row awaits review", c[0].review === "awaiting-review" && c[0].publication === "unpublished" && c[0].delivery.state === "not-observed");
    check("a set with no row is open", c[0].open === true);

    let r = record(root, { set, status: "approved", note: "run it" });
    check("approve writes a member row bound to the revision", r.review === "approved" && readRows(path.join(root, "creative", "approvals.jsonl"))[0].by === "member");
    check("approving twice appends nothing", (record(root, { set, status: "approved" }), readRows(path.join(root, "creative", "approvals.jsonl")).length === 1));

    const before = c[0].revision;
    fs.writeFileSync(path.join(root, "plan", "offer.md"), "# Offer\n\n## Landing URL\nhttps://example.com/pricing\n\n## Countries sold into\nUS, GB\n\n## Daily cap\n30\n\n## Currency\nUSD\n");
    c = catalog(root);
    check("a budget change gives a new revision", c[0].revision !== before);
    check("an approval for an earlier revision reads changed", c[0].review === "changed");
    let threw = false;
    try { record(root, { set, status: "approved", revision: before }); } catch { threw = true; }
    check("a stale page cannot approve the new revision", threw);

    r = record(root, { set, status: "rejected", note: "dated imagery" });
    check("reject closes the slot", r.review === "rejected" && r.open === false && r.review_note === "dated imagery");

    r = record(root, { set, status: "needs-revision", note: "shorter headline" });
    check("needs revision keeps the slot open with the note", r.review === "needs-revision" && r.open === true);

    record(root, { set, status: "approved" });
    fs.mkdirSync(path.join(root, "build"), { recursive: true });
    fs.writeFileSync(path.join(root, "build", "publication-receipts.jsonl"), JSON.stringify({ set, revision: c[0].revision, ad_id: "1", campaign_id: "2", configured_status: "ACTIVE", effective_status: "PENDING_REVIEW", url: "https://example.com/ads" }) + "\n");
    c = catalog(root);
    check("a receipt with an ad id reads published, not queued", c[0].publication === "published" && c[0].effective_status === "PENDING_REVIEW");
    check("published is still not delivering", c[0].delivery.state === "not-observed" && c[0].open === false);
    threw = false;
    try { record(root, { set, status: "withdrawn" }); } catch { threw = true; }
    check("a published set cannot be withdrawn from the page", threw);

    fs.mkdirSync(path.join(root, "metrics"), { recursive: true });
    fs.writeFileSync(path.join(root, "metrics", "daily.jsonl"), JSON.stringify({ object_id: "1", level: "ad", date: "2026-03-05", impressions: 0 }) + "\n" + JSON.stringify({ object_id: "1", level: "ad", date: "2026-03-06", impressions: 140 }) + "\n");
    c = catalog(root);
    check("delivery comes from the latest metrics row for the ad", c[0].delivery.state === "delivering" && c[0].delivery.on === "2026-03-06");

    const html = page(root);
    check("the page renders every label from disk", html.includes("review: approved") && html.includes("publication: published") && html.includes("delivering (140 impressions"));
    const banned = new RegExp("[" + String.fromCharCode(0x2013, 0x2014, 0xab, 0xbb) + "]");
    check("the page carries no dash and no guillemet", !banned.test(html));

    fs.writeFileSync(path.join(root, "creative", "approvals.jsonl"), JSON.stringify({ set, revision: c[0].revision, status: "approved", at: "x", by: "ads-build-desk" }) + "\n");
    c = catalog(root);
    check("a row not by the member is ignored", c[0].review === "awaiting-review");
  } catch (err) {
    failures++;
    process.stdout.write("  FAIL  selftest threw: " + err.message + "\n");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
  process.stdout.write(failures === 0 ? "review: selftest PASS (17 checks)\n" : "review: selftest FAIL (" + failures + " of 17)\n");
  process.exit(failures === 0 ? 0 : 1);
}

function usage() {
  process.stdout.write([
    "usage:",
    "  node scripts/review.mjs --serve [--port 8770] [--root <path>]",
    "  node scripts/review.mjs --catalog [--json] [--root <path>]",
    "  node scripts/review.mjs --record --set <creative/set-...> --status <approved|rejected|needs-revision|withdrawn> [--note \"...\"]",
    "  node scripts/review.mjs --selftest",
    "",
  ].join("\n"));
}

function main() {
  const argv = process.argv.slice(2);
  const opts = { serve: false, catalog: false, record: false, json: false, selftest: false, help: false, port: 8770, root: null, set: null, status: null, note: "" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case "--serve": opts.serve = true; break;
      case "--catalog": opts.catalog = true; break;
      case "--record": opts.record = true; break;
      case "--json": opts.json = true; break;
      case "--selftest": opts.selftest = true; break;
      case "--help": case "-h": opts.help = true; break;
      case "--port": opts.port = Number(argv[++i]); break;
      case "--root": opts.root = argv[++i]; break;
      case "--set": opts.set = argv[++i]; break;
      case "--status": opts.status = argv[++i]; break;
      case "--note": opts.note = argv[++i]; break;
      default:
        process.stderr.write("review: unknown option " + a + "\n");
        usage();
        process.exit(2);
    }
  }
  if (opts.help) { usage(); process.exit(0); }
  if (opts.selftest) { selftest(); return; }
  const root = path.resolve(opts.root || process.env.ADS_ROOT || path.join(path.dirname(fileURLToPath(import.meta.url)), ".."));
  if (opts.serve) { serve(root, opts.port); return; }
  if (opts.record) {
    try {
      const r = record(root, { set: opts.set, status: opts.status, note: opts.note });
      process.stdout.write(JSON.stringify(r, null, 2) + "\n");
      process.exit(0);
    } catch (err) {
      process.stderr.write("review: " + err.message + "\n");
      process.exit(1);
    }
  }
  const items = catalog(root);
  if (opts.json) { process.stdout.write(JSON.stringify(items, null, 2) + "\n"); process.exit(0); }
  if (!items.length) process.stdout.write("no creative sets\n");
  for (const it of items) {
    process.stdout.write(it.set + "\n  review " + it.review + (it.review_at ? " (" + it.review_at + ")" : "") + " | publication " + it.publication + (it.effective_status ? " (" + it.effective_status + ")" : "") + " | delivery " + it.delivery.state + "\n  revision " + it.revision.slice(0, 12) + " | open " + it.open + "\n");
  }
  process.exit(0);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
