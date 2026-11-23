// Builds the README's animated SVGs. No dependencies, Node 18 or newer.
//
//   node assets/src/logo-motion.mjs            logo plus tagline, live counts
//   node assets/src/logo-motion.mjs --offline  tagline counts from the last build
//   node assets/src/logo-motion.mjs --selftest
//
// Writes assets/logo-animated-light.svg, assets/logo-animated-dark.svg,
// assets/tagline-light.svg and assets/tagline-dark.svg.
//
// The logo is the eight tile mark from logo.html. The tiles drop in one by one
// on a damped spring, the eighth lights signal blue with a pulse, and the
// wordmark slides out from behind the mark. Every motion is simulated and
// sampled at 60 fps into SMIL keyTimes, so it plays once, smoothly, inside
// GitHub's image proxy, which runs no script and loads no font. The letters are
// path outlines from wordmark-glyphs.json (made by wordmark-glyphs.py).
//
// The tagline rotates three lines with CSS keyframes. Two of them carry the
// GitHub star count and the npm installs of the last 30 days, floored so the
// line stays true between builds. Re-run this script to refresh them, then
// commit, and bump the ?v= on the README image URLs so GitHub refetches.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(here, "..");
const FPS = 60;
const END = 2.0; // seconds; the logo plays once and holds the last frame

const THEMES = {
  light: { ink: "#0d161b", sub: "#4a5a64", blue: "#0b7fc7" },
  dark: { ink: "#f1e8cb", sub: "#9fb0ba", blue: "#2f9fe3" },
};

// A damped spring from 0 to 1. zeta below 1 overshoots once and settles.
export function spring(t, omega, zeta) {
  if (t <= 0) return 0;
  if (zeta >= 1) return 1 - Math.exp(-omega * t) * (1 + omega * t);
  const wd = omega * Math.sqrt(1 - zeta * zeta);
  return 1 - Math.exp(-zeta * omega * t) * (Math.cos(wd * t) + ((zeta * omega) / wd) * Math.sin(wd * t));
}
const easeOutCubic = (u) => 1 - Math.pow(1 - Math.min(Math.max(u, 0), 1), 3);
const r2 = (v) => Math.round(v * 100) / 100;

// Samples f(t) for t in [start, END] at 60 fps and drops the flat tail, so a
// motion costs only the frames where something moves. Returns SMIL attributes.
export function track(f, start, fmt = (v) => String(r2(v))) {
  const times = [0];
  const values = [fmt(f(0))];
  const first = Math.max(start, 1 / FPS);
  let lastMoving = first;
  const samples = [];
  for (let t = first; t <= END + 1e-9; t += 1 / FPS) samples.push([t, f(t)]);
  const final = samples[samples.length - 1][1];
  for (const [t, v] of samples) if (Math.abs(v - final) > 0.002) lastMoving = t;
  for (const [t, v] of samples) {
    if (t > lastMoving + 1 / FPS) break;
    times.push(t / END);
    values.push(fmt(v));
  }
  if (times[times.length - 1] < 1) {
    times.push(1);
    values.push(fmt(final));
  }
  const kt = times.map((x) => (Math.round(x * 10000) / 10000).toFixed(4));
  for (let i = 1; i < kt.length; i++) if (Number(kt[i]) <= Number(kt[i - 1])) throw new Error("keyTimes not increasing at " + i);
  return `dur="${END}s" fill="freeze" calcMode="linear" keyTimes="${kt.join(";")}" values="${values.join(";")}"`;
}

export function logoSvg(theme, glyphs) {
  const c = THEMES[theme];
  const W = 840, H = 200;
  const TILE = 26, GAP = 9, MARK_W = 4 * TILE + 3 * GAP, MARK_H = 2 * TILE + GAP;
  const textW = Math.max(glyphs.name.width, glyphs.tag.width + 4);
  const left = (W - (MARK_W + 30 + textW)) / 2;
  const markTop = (H - MARK_H) / 2;
  const textX = left + MARK_W + 30;
  const blockTop = (H - (68 + 9 + 17)) / 2;
  const nameBase = blockTop + 58.4;
  const tagBase = blockTop + 68 + 9 + 13.5;

  const parts = [];
  // The eight tiles. Outer group places the tile centre, the middle group drops
  // it in, the inner group carries the pulse on the lit tile.
  for (let i = 0; i < 8; i++) {
    const col = i % 4, row = Math.floor(i / 4);
    const cx = left + col * (TILE + GAP) + TILE / 2;
    const cy = markTop + row * (TILE + GAP) + TILE / 2;
    const t0 = 0.05 + i * 0.065;
    const drop = track((t) => (t < t0 ? -30 : -30 * (1 - spring(t - t0, 24, 0.42))), t0, (v) => `0 ${r2(v)}`);
    const fade = track((t) => easeOutCubic((t - t0) / 0.1), t0);
    const lit = i === 7;
    const LIT_AT = 0.95;
    let inner = `<rect x="-13" y="-13" width="26" height="26" rx="7" fill="${c.ink}">`;
    if (lit) inner += `<animate attributeName="fill" begin="0s" dur="${END}s" fill="freeze" calcMode="discrete" keyTimes="0;${(LIT_AT / END).toFixed(4)}" values="${c.ink};${c.blue}"/>`;
    inner += "</rect>";
    let pulse = "";
    if (lit) {
      const scale = track((t) => (t < LIT_AT ? 1 : 1 + 0.32 * (1 - spring(t - LIT_AT, 20, 0.38))), LIT_AT, (v) => `${r2(v)} ${r2(v)}`);
      pulse = `<animateTransform attributeName="transform" type="scale" begin="0s" ${scale}/>`;
      // A ring that leaves the lit tile and fades.
      const grow = (t) => easeOutCubic((t - LIT_AT) / 0.55);
      const ringSize = track((t) => (t < LIT_AT ? 26 : 26 + 34 * grow(t)), LIT_AT);
      const ringPos = track((t) => (t < LIT_AT ? -13 : -(26 + 34 * grow(t)) / 2), LIT_AT);
      const ringOp = track((t) => (t < LIT_AT ? 0 : 0.55 * (1 - grow(t))), LIT_AT);
      parts.push(
        `<g transform="translate(${r2(cx)} ${r2(cy)})"><rect x="-13" y="-13" width="26" height="26" rx="9" fill="none" stroke="${c.blue}" stroke-width="2" opacity="0">` +
          `<animate attributeName="width" begin="0s" ${ringSize}/><animate attributeName="height" begin="0s" ${ringSize}/>` +
          `<animate attributeName="x" begin="0s" ${ringPos}/><animate attributeName="y" begin="0s" ${ringPos}/>` +
          `<animate attributeName="opacity" begin="0s" ${ringOp}/></rect></g>`
      );
    }
    parts.push(
      `<g transform="translate(${r2(cx)} ${r2(cy)})"><g opacity="0"><animate attributeName="opacity" begin="0s" ${fade}/>` +
        `<animateTransform attributeName="transform" type="translate" begin="0s" ${drop}/>` +
        `<g>${pulse}${inner}</g></g></g>`
    );
  }

  // The wordmark slides out from behind the mark through a clip.
  const REVEAL = 0.62;
  const reveal = (t) => (t < REVEAL ? 0 : spring(t - REVEAL, 10, 0.9));
  const clipW = track((t) => (textW + 40) * reveal(t), REVEAL);
  const slide = track((t) => `${r2(-36 * (1 - reveal(t)))} 0`, REVEAL, (v) => v);
  const name = glyphs.name.glyphs.map((g) => `<path d="${g.d}"/>`).join("");
  const tag = glyphs.tag.glyphs.map((g) => `<path d="${g.d}"/>`).join("");
  const TAG_AT = 1.15;
  const tagOp = track((t) => easeOutCubic((t - TAG_AT) / 0.45), TAG_AT);
  const tagRise = track((t) => `0 ${r2(6 * (1 - easeOutCubic((t - TAG_AT) / 0.45)))}`, TAG_AT, (v) => v);

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="AI Employees. Open source, by Reinventing.AI">`,
    `<title>AI Employees</title>`,
    `<defs><clipPath id="reveal"><rect x="${r2(textX - 8)}" y="0" width="0" height="${H}"><animate attributeName="width" begin="0s" ${clipW}/></rect></clipPath></defs>`,
    ...parts,
    `<g clip-path="url(#reveal)"><g><animateTransform attributeName="transform" type="translate" begin="0s" ${slide}/>`,
    `<g transform="translate(${r2(textX)} ${r2(nameBase)})" fill="${c.ink}">${name}</g>`,
    `<g opacity="0"><animate attributeName="opacity" begin="0s" ${tagOp}/><animateTransform attributeName="transform" type="translate" begin="0s" ${tagRise}/>`,
    `<g transform="translate(${r2(textX + 4)} ${r2(tagBase)})" fill="${c.sub}">${tag}</g></g>`,
    `</g></g>`,
    `</svg>`,
  ].join("\n") + "\n";
}

// Floors a count so the line stays true until the next build: 916 reads 900+.
export function floorCount(n) {
  const step = n >= 10000 ? 1000 : n >= 1000 ? 100 : 50;
  return Math.max(step, Math.floor(n / step) * step).toLocaleString("en-US") + "+";
}

export function taglineSvg(theme, counts) {
  const c = THEMES[theme];
  const lines = [
    [["Runs on ", c.sub], ["Claude Code and 12 other agents.", c.blue]],
    [[floorCount(counts.stars), c.blue], [" stars on GitHub", c.sub]],
    [[floorCount(counts.npmMonth), c.blue], [" npm installs a month", c.sub]],
  ];
  const LOOP = 9.6, n = lines.length, share = 100 / n;
  const pct = (v) => `${v.toFixed(2)}%`;
  let css = "text{font:400 22px -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}";
  lines.forEach((_, i) => {
    const a = i * share, inEnd = a + 3.65, outStart = a + share - 3.64, b = a + share;
    css +=
      `@keyframes l${i}{0%,${pct(Math.max(a - 0.01, 0))}{opacity:0;transform:translateY(10px)}` +
      `${pct(inEnd)},${pct(outStart)}{opacity:1;transform:translateY(0)}${pct(Math.min(b, 100))},100%{opacity:0;transform:translateY(-10px)}}` +
      `.l${i}{animation:l${i} ${LOOP}s infinite;opacity:0}`;
  });
  const label = lines.map((l) => l.map(([s]) => s).join("")).join(" ");
  const texts = lines
    .map((l, i) => `<text class="l${i}" x="300" y="31" text-anchor="middle">${l.map(([s, col]) => `<tspan fill="${col}">${s}</tspan>`).join("")}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="44" viewBox="0 0 600 44" role="img" aria-label="${label}"><style>${css}</style>${texts}</svg>\n`;
}

function liveCounts(offline) {
  const cacheFile = path.join(here, "tagline-counts.json");
  const cached = fs.existsSync(cacheFile) ? JSON.parse(fs.readFileSync(cacheFile, "utf8")) : { stars: 900, npmMonth: 1000 };
  if (offline) return cached;
  const counts = { ...cached };
  try {
    counts.stars = Number(execFileSync("gh", ["api", "repos/markfulton/ai-employees", "--jq", ".stargazers_count"], { encoding: "utf8" }).trim()) || cached.stars;
  } catch { /* keep the last known count */ }
  try {
    const out = execFileSync("curl", ["-s", "https://api.npmjs.org/downloads/point/last-month/ai-employees"], { encoding: "utf8" });
    counts.npmMonth = JSON.parse(out).downloads || cached.npmMonth;
  } catch { /* keep the last known count */ }
  counts.date = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(cacheFile, JSON.stringify(counts, null, 1) + "\n");
  return counts;
}

function selftest() {
  const ok = (cond, msg) => { if (!cond) { console.error("FAIL " + msg); process.exit(1); } };
  ok(Math.abs(spring(5, 24, 0.42) - 1) < 1e-6, "spring settles at 1");
  ok(spring(0.1, 24, 0.42) > 1, "spring overshoots");
  ok(floorCount(916) === "900+" && floorCount(1064) === "1,000+" && floorCount(30) === "50+", "floorCount");
  const glyphs = JSON.parse(fs.readFileSync(path.join(here, "wordmark-glyphs.json"), "utf8"));
  for (const theme of Object.keys(THEMES)) {
    const svg = logoSvg(theme, glyphs);
    ok(!/<script|<foreignObject|@import|url\(http/.test(svg), "no script or remote fetch in " + theme);
    ok(svg.length < 160000, "logo under 160 KB");
    ok(![...svg].some((ch) => ch.codePointAt(0) === 0x2013 || ch.codePointAt(0) === 0x2014), "no dashes");
    const t = taglineSvg(theme, { stars: 916, npmMonth: 1064 });
    ok(t.includes("900+") && t.includes("1,000+"), "tagline counts");
  }
  console.log("logo-motion selftest: PASS");
}

if (process.argv.includes("--selftest")) selftest();
else if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const glyphs = JSON.parse(fs.readFileSync(path.join(here, "wordmark-glyphs.json"), "utf8"));
  const counts = liveCounts(process.argv.includes("--offline"));
  for (const theme of Object.keys(THEMES)) {
    const logo = logoSvg(theme, glyphs);
    fs.writeFileSync(path.join(assets, `logo-animated-${theme}.svg`), logo);
    fs.writeFileSync(path.join(assets, `tagline-${theme}.svg`), taglineSvg(theme, counts));
    console.log(`${theme}: logo ${(logo.length / 1024).toFixed(1)} KB`);
  }
  console.log(`tagline counts: ${counts.stars} stars, ${counts.npmMonth} npm installs in 30 days`);
}
