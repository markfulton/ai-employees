#!/usr/bin/env node
/*
 * voice-check.mjs, the Anti-AI Voice Check.
 *
 * The second pass on any copy this kit writes for a person to read: a post, a
 * first message, an email, a reply, a video script, an article, a brief.
 * copy-check.mjs is the first pass and owns the hard rules (dashes, unsourced
 * numbers, banned lists, hashtags, markdown, secrets). This script finds the
 * SHAPES a reader recognises as machine written, which no banned word list can
 * see:
 *
 *   a chant of "Your X. Your Y. Your Z.", three sentences in a row that start
 *   with the same word, a standalone "Not X." fragment, "It's not X, it's Y",
 *   a prophecy about the people who will win, an opener that orders the reader
 *   about or asks a rhetorical question, an abstract noun as the hook, a post
 *   with nobody in it, three clipped fragments on one line, a wall of one line
 *   sentences, and the stock phrases every generated draft reaches for.
 *
 * It reads the member's own voice file, so it never judges a person against
 * somebody else's habits. Under `## How I talk` in the voice file
 * (voice/voice.md in the Social Media kit, strategy/voice.md in the others):
 *
 *   ### Phrases I use        a phrase listed here is never flagged as stock
 *   ### Tells that are not me a phrase listed here is always a tell
 *   ### Shapes that are mine  a rule id listed here drops from tell to warn,
 *                             because the member's own recordings show it
 *
 * The script finds. The routine rewrites, in the member's voice, from that
 * file's samples and `## How I talk`, and runs this script again on the result.
 *
 * Requires Node 18 or newer. No dependencies. Runs the same on Windows and POSIX.
 *
 * USAGE
 *   node scripts/voice-check.mjs --file <path> [--kind post] [--json]
 *   node scripts/voice-check.mjs --file - --kind email            (reads stdin)
 *   node scripts/voice-check.mjs --profile <file> [<file> ...] [--json]
 *   node scripts/voice-check.mjs --selftest
 *   node scripts/voice-check.mjs --help
 *
 *   --kind is one of: post, dm, email, reply, script, article, brief
 *   --root <path>   The kit working folder, used to find voice/voice.md, then
 *                   strategy/voice.md. Defaults to this script's parent folder.
 *   --voice <path>  A voice file somewhere else. Overrides --root.
 *   --profile       Reads the member's own recordings and posts (.vtt, .srt,
 *                   .txt, .md) and counts how they talk: sentence length,
 *                   how they open, recurring phrases, doubled words, hedges,
 *                   which shapes fire on their own words. The intake routine
 *                   writes `## How I talk` from this output. It judges nothing.
 *
 * WHICH RULES APPLY WHERE
 *   rule                post dm  email reply script article brief
 *   dash                 y   y    y     y     y      y       y
 *   stock-phrase         y   y    y     y     y      y       y
 *   member-tell          y   y    y     y     y      y       y
 *   coach-speak          y   y    y     y     y      y       y
 *   memo-vocab           y   y    y     n     y      n       n
 *   prophecy             y   y    y     y     y      y       y
 *   not-fragment         y   y    y     y     y      y       y
 *   not-x-its-y          y   y    y     y     y      y       y
 *   drumbeat             y   y    y     y     y      y       y
 *   triplet-line         y   y    y     y     y      y       y
 *   rule-of-three        y   y    y     y     y      warn    y
 *   imperative-opener    y   y    y     n     y      n       n
 *   rhetorical-opener    y   y    y     y     y      y       n
 *   abstract-hook        y   y    y     n     y      n       n
 *   no-first-person      y   y    y     y     y      n       n
 *   your-stack           y   y    y     n     y      n       n
 *   staccato-wall        y   n    y     n     y      n       y
 *   banned-close         y   y    y     y     y      n       n
 *   segue-label          y   y    y     y     y      y       y
 *   fragment-run         y   y    y     y     y      y       y
 *   chatbot-phrase       y   y    y     y     y      y       y
 *   engagement-bait      y   y    y     n     y      n       n
 *   question-close (warn) y  y    y     n     y      n       n
 *   moral-close (warn)   y   y    y     y     y      n       n
 *
 * EXIT CODES
 *   0  clean, or warns only
 *   1  one or more tells: rewrite before the copy goes anywhere
 *   2  bad usage, or the input could not be read
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SELF = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SELF);
const KINDS = ["post", "dm", "email", "reply", "script", "article", "brief"];

const OFF = {
  post: [],
  dm: ["staccato-wall"],
  email: [],
  reply: ["memo-vocab", "imperative-opener", "abstract-hook", "your-stack", "staccato-wall", "engagement-bait", "question-close"],
  script: [],
  article: ["memo-vocab", "imperative-opener", "abstract-hook", "no-first-person", "your-stack", "staccato-wall", "banned-close", "moral-close", "engagement-bait", "question-close"],
  brief: ["memo-vocab", "imperative-opener", "rhetorical-opener", "abstract-hook", "no-first-person", "your-stack", "banned-close", "moral-close", "engagement-bait", "question-close"],
};
const WARN_ONLY = { article: ["rule-of-three"] };

// Dashes by code point. The source carries escapes, never the characters.
const DASH = /[\u2012\u2013\u2014\u2015]|&(mdash|ndash);|&#(8211|8212|x2013|x2014);/i;

const STOCK = [
  /here'?s the (thing|kicker|twist|truth|catch)\b/i, /let that sink in/i, /what if i told you/i,
  /in today'?s (fast[ -]paced|digital|ai|modern)/i, /\bin a world where\b/i, /\b(dive|diving) (in|into)\b/i, /\bdeep dive\b/i,
  /\bdelve\b/i, /game[ -]?changer/i, /\bunlock(s|ed|ing)?\b/i, /\bsupercharg/i, /\bseamless(ly)?\b/i, /\belevate\b/i,
  /\bempower/i, /\brevolutioni[sz]/i, /\bthrilled to\b/i, /excited to (announce|share)/i, /at the end of the day/i,
  /\bit'?s worth noting\b/i, /\b(the|today'?s) (ai |digital |business )?landscape\b/i, /\bnavigat(e|ing) the\b/i, /harness(ing)? the power/i,
  /\brobust\b/i, /imagine a world/i, /\bpicture this\b/i, /buckle up/i, /\bhere'?s why\b/i, /\bno fluff\b/i,
  /secret (sauce|weapon)/i, /\blevel up\b/i, /\btransformative\b/i, /\bstreamlin/i, /\beffortless(ly)?\b/i, /\bunleash/i,
  /\bskyrocket/i, /the real (magic|power|secret|question|shift|unlock|win)\b/i, /\bsimply put\b/i, /make no mistake/i,
  /it'?s that simple/i, /that'?s the (whole )?point\b/i, /that'?s it\. that'?s the post/i, /\bthe best part\?/i,
  /\bspoiler( alert)?\b/i, /\bplot twist\b/i, /\bwhether you'?re (a|an)\b/i, /\btestament to\b/i, /\btapestry\b/i,
  /\bever[ -]evolving\b/i, /\bin the realm of\b/i, /\bfoster(s|ing)? (a|an|growth|connection)/i, /\bcutting[ -]edge\b/i,
  /\bnext[ -]level\b/i, /\bthe one to watch\b/i, /you won'?t want to miss/i, /don'?t miss (this|out)/i, /mark your calendars?/i,
  /\bthe pieces (exist|are here) now\b/i, /\bI hope this (email|message) finds you\b/i, /\bjust circling back\b/i,
  /\bper my last email\b/i, /\bfeel free to reach out\b/i, /\bdon'?t hesitate to\b/i, /\bwe apologi[sz]e for any inconvenience\b/i,
];
// A label that announces the next line instead of saying it ("Here's the honest answer.").
const SEGUE = /\b(here'?s|here is) (the|my) (honest |real |short |simple |whole )?(answer|truth|deal|secret|part|reason|thing|kicker|catch|twist)\b|\bhere'?s (what|why|how) (happened|it works|this means|that means|it matters)\b|\bthe best part\b|\bwhere it gets (good|interesting|wild)\b/i;
// The shapes a general chatbot reaches for when asked for "a post about X" (tested on drafts a member would paste).
const CHATBOT = [
  /\bhere'?s your sign\b/i, /\bthat one (friend|person|coworker|colleague) who\b/i, /\b(taught|teaches) me (more than|things) no [\w ]{1,20} ever\b/i,
  /\bthis is the part (nobody|no one) sees\b/i, /\bbefore most (of )?[\w ]{1,20} (has|have) (had )?(their|its) first coffee\b/i,
  /\byou (just|only) need to (start|begin|show up)\b/i, /\byou don'?t need (to have )?(everything|it all|all the answers) figured out\b/i,
  /\b(the|your) (journey|adventure) (starts|begins)\b/i, /\bsweeten (your|their) (day|week|morning)\b/i, /\bwe'?d love to (cheer you on|hear from you)\b/i,
  /\bwhat are you waiting for\b/i, /\btreat yourself\b/i, /\bfrom our (kitchen|family|team) to yours\b/i, /\bmade with love\b/i,
  /\bit all (started|began) with (one|a)\b/i, /\bthe rest is history\b/i,
];
// Engagement bait: an ask that serves the algorithm, not the reader.
const BAIT = /\btag (someone|a friend|the (person|friend|one)|your (friend|bestie|bff))\b|\bdouble[ -]tap\b|\bsave this (post |for later)\b|\bshare (this )?with (someone|a friend) who\b|\bdrop an? (emoji|comment) if\b|\bsmash (that|the) like\b/i;
// "X, not just Y." and "You don't need X. You just need Y.": the contrast frame in its other two spellings.
const NOT_JUST = /\b[\w' ]{1,25}, not (just|only) [\w' ]{1,25}[.!]|\byou don'?t need [^.\n]{1,40}\. you (just |only )?need\b/i;
// A closing moral: the last line turns the story into advice for "you".
const MORAL_CLOSE = /^(so )?(if you'?re|whether you'?re|the (lesson|takeaway|trade|point|key|moral)\b|that'?s the (lesson|takeaway|point))/i;
const COACH = [/say what done looks like/i, /define done/i, /no win too small/i, /numbers welcome/i, /come build alongside/i,
  /\bshow up for yourself\b/i, /\byour future self will thank you\b/i, /\bprogress over perfection\b/i];
const MEMO = /\b(decision rule|success measure|exit condition|spending boundary|stakeholders?|north star|value proposition|operating model|leverage point|synerg(y|ies))\b/i;
const PROPHECY = /\b(the (people|ones|founders|builders|businesses|teams|operators|companies|brands|agents) (who|that)\b[^.\n]*\b(will|win|wins|have the edge|get ahead|thrive))|\bwill (have the edge|be left behind|win this)\b|\bthe future (belongs|is here|is now)\b|\bwill run (a lot of|most|every)\b|\bnot someday\b|\bthis is the (year|decade) of\b|\b(adapt|evolve) or (die|get left behind)\b/i;
const OPEN_IMPERATIVE = /^(stop|quit|forget|imagine|picture|meet|say goodbye|ditch|unlock|discover)\b/i;
const OPEN_RHETORICAL = /^(what if|ever (wonder|wondered)|have you ever|did you know|why (do|does|are|is) (most|so many)|are you still|tired of|struggling (to|with))\b.*\?/i;
const CLOSE_BANNED = /^(thoughts|agree|what do you think|your move|who'?s with me|let me know your thoughts)\??\s*[^\w]*$/i;
const ABSTRACT_SUBJECT = /^(an?|the)\s+(\w+\s+)?(\w+(tion|ment|ness|ity|ship|ance|ence|ism)|scope|training|strategy|growth|success|leadership|clarity|focus|execution|distribution|consistency|everything|nothing)\b/i;
// A business account writes as "we", and that counts as a person in the copy.
const FIRST_PERSON = /\b(I|I'm|I've|I'll|I'd|my|me|mine|we|we're|we've|we'll|our|us)\b/i;
const FIRST_PERSON_G = /\b(I|I'm|I've|I'll|I'd|my|me|mine|we|we're|we've|we'll|our|us)\b/gi;
const HEDGE = /\b(kind of|sort of|basically)\b/gi;
const REVEAL_Q = /^(the (result|catch|kicker|twist|difference|answer|secret|outcome))\?$/i;
const EMOJI = /\p{Extended_Pictographic}/u;
const DRUM_WORDS = ["your", "you", "no", "not", "more", "less", "every", "zero", "one", "faster", "better", "just", "never"];

const sentences = (line) => line.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
const words = (s) => (s.match(/[\p{L}\p{N}'\u2019$%]+/gu) || []).length;
const norm = (s) => s.toLowerCase().replace(/[\u2019]/g, "'").replace(/\s+/g, " ").trim();

/* ------------------------------------------------------------------ *
 * The member's voice file. Only `## How I talk` is read here.
 * ------------------------------------------------------------------ */

export function readVoice(text) {
  const out = { mine: [], notMe: [], shapes: [], found: false };
  if (!text) return out;
  const src = String(text).replace(/^\uFEFF/, "");
  const start = src.search(/^## How I talk\s*$/m);
  if (start < 0) return out;
  out.found = true;
  const rest = src.slice(start).split(/\r?\n/).slice(1);
  let sub = null;
  for (const raw of rest) {
    if (/^## /.test(raw)) break;
    const h = /^### (.+?)\s*$/.exec(raw);
    if (h) { sub = h[1].toLowerCase(); continue; }
    const m = /^\s*[-*]\s+(.+)$/.exec(raw);
    if (!m || !sub) continue;
    let item = m[1].split(" | ")[0].trim().replace(/^["'\u201c\u2018]+|["'\u201d\u2019]+$/g, "").trim();
    if (!item || /^\u00ab/.test(item)) continue;
    if (sub.startsWith("phrases i use")) out.mine.push(norm(item));
    else if (sub.startsWith("tells that are not me")) out.notMe.push(norm(item));
    else if (sub.startsWith("shapes that are mine")) out.shapes.push(item.split(/\s/)[0].toLowerCase());
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Strip what is not prose: code fences, URLs, markdown heading marks,
 * list markers, and the arrow item marker the kits use on social.
 * ------------------------------------------------------------------ */

function prose(text) {
  return String(text || "")
    .replace(/^\uFEFF/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/https?:\/\/\S+/g, "LINK")
    .split(/\r?\n/)
    .map((l) => l.replace(/^\s*(#{1,6}\s+|[-*+]\s+|\d+[.)]\s+|>\s+|\u2192\s*)/, "").trim())
    .filter(Boolean);
}

export function check(text, { kind = "post", voice = readVoice("") } = {}) {
  const off = new Set(OFF[kind] || []);
  const warnOnly = new Set([...(WARN_ONLY[kind] || []), ...voice.shapes]);
  const out = [];
  const add = (severity, rule, excerpt, why) => {
    if (off.has(rule)) return;
    if (severity === "tell" && warnOnly.has(rule)) { severity = "warn"; why += " (listed under Shapes that are mine, so a warn)"; }
    out.push({ severity, rule, excerpt: String(excerpt).slice(0, 140), why });
  };
  const lines = prose(text);
  const body = lines.join("\n");
  const low = norm(body);
  const isMine = (s) => voice.mine.some((p) => p && norm(s).includes(p) || p.includes(norm(s)));

  { const m = DASH.exec(String(text || "")); if (m) add("tell", "dash", m[0], "em or en dash: use a period or a comma"); }

  for (const re of STOCK) {
    const m = body.match(re);
    if (!m) continue;
    if (isMine(m[0])) add("warn", "stock-phrase", m[0], "a stock phrase, but your voice file lists it as yours");
    else add("tell", "stock-phrase", m[0], "stock phrasing that fits anybody's draft; say the specific thing");
  }
  for (const p of voice.notMe) if (p && low.includes(p)) add("tell", "member-tell", p, "listed under Tells that are not me in your voice file");
  { const m = body.match(SEGUE); if (m && !isMine(m[0])) add("tell", "segue-label", m[0], "a label that announces the next line; delete it and say the line"); }
  for (const re of CHATBOT) { const m = body.match(re); if (m && !isMine(m[0])) add("tell", "chatbot-phrase", m[0], "a line a general chatbot writes for any business; say the specific thing that happened"); }
  { const m = body.match(BAIT); if (m) add("tell", "engagement-bait", m[0], "an ask that serves the algorithm, not the reader; ask for one real thing or stop"); }
  { const m = body.match(NOT_JUST); if (m) add("tell", "not-x-its-y", m[0], "the contrast frame ('X, not just Y', 'You don't need X. You just need Y.'); say the positive once"); }
  for (const re of COACH) { const m = body.match(re); if (m) add("tell", "coach-speak", m[0], "coach-speak cliche"); }
  { const m = body.match(MEMO); if (m) add("tell", "memo-vocab", m[0], "consultant-memo vocabulary: the abstract lesson shape"); }
  for (const m of body.matchAll(new RegExp(PROPHECY.source, "gi"))) add("tell", "prophecy", m[0], "a prophecy about who wins; say what you saw or did, or forecast with 'I think'");

  const first = lines[0] || "";
  if (OPEN_IMPERATIVE.test(first)) add("tell", "imperative-opener", first, "opens by ordering the reader; open on something you did or saw");
  if (OPEN_RHETORICAL.test(first)) add("tell", "rhetorical-opener", first, "rhetorical question opener");
  if (ABSTRACT_SUBJECT.test(first) && !FIRST_PERSON.test(first)) add(FIRST_PERSON.test(body) ? "warn" : "tell", "abstract-hook", first, "an abstract noun as the hook subject; name a concrete thing");
  if (/^(everything|nothing|every|no one|nobody|everyone|most people)\b/i.test(first) && !FIRST_PERSON.test(first)) add("warn", "sweeping-opener", first, "a sweeping claim opener with no person in it");

  const last = lines[lines.length - 1] || "";
  if (CLOSE_BANNED.test(last)) add("tell", "banned-close", last, "'Thoughts?' style close; ask one small, concrete thing or stop");
  if (lines.length > 2 && MORAL_CLOSE.test(last) && !FIRST_PERSON.test(last)) add("warn", "moral-close", last, "the last line turns the story into a lesson for the reader; stop at the last real sentence, or end on the ask");
  if (lines.length > 2 && /^(what'?s|which|what|who|how) (one|would|is|are|was|do) (you|your)?[^?]*\?\s*[^\w]*$/i.test(last)) add("warn", "question-close", last, "a closing question the reader has to think about before answering; a one tap ask or a plain stop usually works better");

  if (body && !FIRST_PERSON.test(body)) add("tell", "no-first-person", first, "nobody is in it: no I, my, we or our anywhere");

  const sents = lines.flatMap(sentences);
  for (const s of sents) if (/^not\b/i.test(s) && words(s) <= 7) add("tell", "not-fragment", s, "a standalone 'Not X.' fragment; state the positive fact once");
  {
    const m = body.match(/\b(it'?s|this is|that'?s) not (just )?[^.,\n]{1,40}[,.;] (it'?s|this is|that'?s)\b/i)
      || body.match(/\bisn'?t (about|just) [^.\n]{1,40}\. it'?s\b/i)
      || body.match(/\bit'?s not about [^.\n]{1,40}[,.;] it'?s about\b/i);
    if (m) add("tell", "not-x-its-y", m[0], "the 'It's not X, it's Y' punchline frame");
  }
  for (let i = 0; i < sents.length; i++) {
    const w = (sents[i].match(/^[\p{L}']+/u) || [""])[0].toLowerCase();
    if (!w) continue;
    let j = i;
    while (j + 1 < sents.length && (sents[j + 1].match(/^[\p{L}']+/u) || [""])[0].toLowerCase() === w) j++;
    const run = j - i + 1;
    if (run >= 3) {
      add(DRUM_WORDS.includes(w) ? "tell" : "warn", "drumbeat", sents.slice(i, j + 1).join(" "), `${run} sentences in a row start with "${w}": a rule of three drumbeat`);
      i = j;
    }
  }
  for (const l of lines) { const ss = sentences(l); if (ss.length >= 3 && ss.every((s) => words(s) <= 4)) add("tell", "triplet-line", l, "three or more clipped fragments on one line ('Open source. Free. Yours.')"); }
  // Three sentences in a row that open on an -ing word and have no subject ("Carrying tools. Making tea. Learning fast.").
  for (let i = 0; i + 2 < sents.length; i++) {
    const g = (x) => /^[A-Z]?[a-z]+ing\b/.test(x) && !/^(nothing|something|everything|anything|morning|evening|thing|king|spring|bring|sing|ring|wing)\b/i.test(x);
    if (g(sents[i]) && g(sents[i + 1]) && g(sents[i + 2])) { add("tell", "fragment-run", sents.slice(i, i + 3).join(" "), "three subjectless -ing fragments in a row; say it as one sentence with you in it"); break; }
  }
  const triples = body.match(/\b[\p{L}'-]+(?: [\p{L}'-]+)?, [\p{L}'-]+(?: [\p{L}'-]+)?,? (?:and|or) [\p{L}'-]+(?: [\p{L}'-]+)?\b/gu) || [];
  if (triples.length >= 3) add("tell", "rule-of-three", triples.join(" | "), `${triples.length} 'X, Y and Z' lists in one piece: the padding pattern`);
  else if (triples.length) add("warn", "rule-of-three", triples.join(" | "), "an 'X, Y and Z' list: keep it only if all three items are concrete and true");
  const yourN = (body.match(/\byour\b/gi) || []).length, iN = (body.match(FIRST_PERSON_G) || []).length;
  if (yourN >= 5 && yourN > 2 * iN) add("tell", "your-stack", `${yourN}x "your" vs ${iN}x I/my/we/our`, "a stack of 'your X' promises with the writer barely in it; say what you built, saw or did");
  for (const l of lines) if (/^(under|on|in|with|for|without|at|by)\b/i.test(l) && words(l) <= 5 && /[.!]$/.test(l)) add("warn", "tail-fragment", l, "a subjectless fragment used as a beat; join it to the line before");
  {
    let run = [], walls = 0;
    const flush = () => { if (run.length >= 6 && run.filter((l) => FIRST_PERSON.test(l)).length < 2 && !walls++) add("warn", "staccato-wall", run.slice(0, 3).join(" / ") + " ...", `${run.length} one line sentences in a row with almost no I or we: reads as a chant, add a scene or a number`); run = []; };
    for (const l of lines) { if (words(l) <= 8 && !/LINK/.test(l)) run.push(l); else flush(); }
    flush();
  }
  for (const l of lines) if (REVEAL_Q.test(l)) add("warn", "reveal-question", l, "a one word reveal question; fine only before a real quote or number");
  { const n = (body.match(HEDGE) || []).length; if (n > 1) add("warn", "spoken-hedge", `${n}x kind of/sort of/basically`, "spoken filler; one at most"); }
  { const n = Array.from(body).filter((c) => EMOJI.test(c) && !/\p{Emoji_Modifier}/u.test(c)).length; if (n > 3) add("warn", "emoji-count", `${n} emoji`, "more emoji than most people use; check against your samples"); }
  { const n = (body.match(/!/g) || []).length; if (n > 2) add("warn", "exclamations", `${n} exclamation marks`, "more than two reads as ad voice"); }

  const tells = out.filter((o) => o.severity === "tell").length;
  return { kind, tells, warns: out.length - tells, verdict: tells ? "rewrite" : out.length ? "review" : "clean", voice_file: voice.found, findings: out };
}

/* ------------------------------------------------------------------ *
 * --profile: how a person actually talks, counted from their own words.
 * ------------------------------------------------------------------ */

const STOP = new Set("the a an and or but so to of in on at for with is are was were be been it this that i you we he she they my your our me us them its it's i'm i've um uh like yeah okay ok just".split(" "));

export function transcriptText(raw, name = "") {
  let t = String(raw || "").replace(/^\uFEFF/, "");
  if (/\.(vtt|srt)$/i.test(name) || /^WEBVTT/.test(t) || /\d\d:\d\d:\d\d[,.]\d{3}\s*-->/.test(t)) {
    const cues = t.split(/\r?\n/)
      .filter((l) => l.trim() && !/^WEBVTT/.test(l) && !/-->/.test(l) && !/^\d+$/.test(l.trim()) && !/^(NOTE|STYLE|Kind:|Language:)/.test(l))
      .map((l) => l.replace(/<[^>]+>/g, "").replace(/^[A-Z][\w .'-]{0,30}:\s+/, "").trim());
    // Auto captions repeat each line as the next cue scrolls in. Keep one copy.
    t = cues.filter((l, i) => l && l !== cues[i - 1]).join(" ");
  }
  return t;
}

export function profile(texts) {
  const all = texts.join("\n");
  const sents = all.replace(/\s+/g, " ").split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => words(s) > 0);
  const totalWords = sents.reduce((n, s) => n + words(s), 0);
  const toks = (all.toLowerCase().replace(/[\u2019]/g, "'").match(/[\p{L}\p{N}']+/gu) || []);
  const grams = new Map();
  for (const n of [2, 3, 4]) for (let i = 0; i + n <= toks.length; i++) {
    const g = toks.slice(i, i + n);
    if (g.every((w) => STOP.has(w))) continue;
    if (STOP.has(g[0]) && STOP.has(g[n - 1]) && n === 2) continue;
    const k = g.join(" "); grams.set(k, (grams.get(k) || 0) + 1);
  }
  const phrases = [...grams.entries()].filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1] || b[0].split(" ").length - a[0].split(" ").length).slice(0, 40)
    .filter(([k], i, arr) => !arr.slice(0, i).some(([p]) => p.includes(k))).slice(0, 25).map(([phrase, count]) => ({ phrase, count }));
  const openers = new Map();
  for (const s of sents) { const k = (s.toLowerCase().match(/^[\p{L}']+(?: [\p{L}']+)?/u) || [""])[0]; if (k) openers.set(k, (openers.get(k) || 0) + 1); }
  const doubled = new Map();
  // A doubled content word is emphasis ("really, really"); a doubled function word is a stutter ("and and").
  for (const m of all.matchAll(/\b(\w+),? \1\b/gi)) { const w = m[1].toLowerCase(), k = m[0].toLowerCase(); if (w.length >= 3 && !STOP.has(w) && !/^(\d|ha|bye|la)/.test(w)) doubled.set(k, (doubled.get(k) || 0) + 1); }
  const fp = (all.match(FIRST_PERSON_G) || []).length, you = (all.match(/\byou(r)?\b/gi) || []).length;
  const shapes = {};
  for (const t of texts) for (const f of check(t, { kind: "post" }).findings) if (f.rule !== "no-first-person") shapes[f.rule] = (shapes[f.rule] || 0) + 1;
  // Auto captions carry no punctuation, so sentence measures would read one giant sentence. Say so instead.
  const punctuated = sents.length >= totalWords / 60;
  const na = "n/a (no punctuation in the source)";
  return {
    sources: texts.length, words: totalWords, sentences: punctuated ? sents.length : na,
    avg_sentence_words: !punctuated ? na : sents.length ? Math.round((totalWords / sents.length) * 10) / 10 : 0,
    short_sentence_share: !punctuated ? na : sents.length ? Math.round((sents.filter((s) => words(s) <= 6).length / sents.length) * 100) / 100 : 0,
    question_share: !punctuated ? na : sents.length ? Math.round((sents.filter((s) => s.endsWith("?")).length / sents.length) * 100) / 100 : 0,
    first_person_per_100_words: totalWords ? Math.round((fp / totalWords) * 1000) / 10 : 0,
    you_per_100_words: totalWords ? Math.round((you / totalWords) * 1000) / 10 : 0,
    hedges: (all.match(HEDGE) || []).length,
    recurring_phrases: phrases,
    sentence_openers: !punctuated ? [] : [...openers.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([opener, count]) => ({ opener, count })),
    doubled_words: [...doubled.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([phrase, count]) => ({ phrase, count })),
    shapes_in_own_words: shapes,
  };
}

/* ------------------------------------------------------------------ *
 * Self test. CI runs this in every kit that carries the script.
 * ------------------------------------------------------------------ */

function selftest() {
  const fail = [];
  let cases = 0;
  const expect = (name, cond) => { cases++; if (!cond) fail.push(name); };
  const rules = (t, o) => check(t, o).findings.filter((f) => f.severity === "tell").map((f) => f.rule);

  const ai = "Stop guessing which leads are worth it.\n\nYour pipeline. Your rules. Your growth.\n\nNot someday.\n\nThe businesses who adapt first will have the edge.\n\nThoughts?";
  const r = rules(ai);
  for (const want of ["imperative-opener", "triplet-line", "not-fragment", "prophecy", "banned-close", "no-first-person"]) expect("ai draft flags " + want, r.includes(want));
  expect("ai draft exits as rewrite", check(ai).verdict === "rewrite");

  const human = "I rebuilt our booking page on Tuesday.\n\nTwo clients booked before lunch, which has never happened on a weekday.\n\nI still want to fix the confirmation email. It reads like a robot wrote it.\n\nWant the checklist I used?";
  expect("human draft is clean of tells", check(human).tells === 0);
  expect("we counts as a person", !rules("We moved the shop to Saturdays and the queue halved.").includes("no-first-person"));
  expect("dash by code point", rules("I shipped it \u2014 finally.").includes("dash"));
  expect("dash by entity", rules("I shipped it &mdash; finally.").includes("dash"));
  expect("drumbeat on your", rules("I built it.\n\nYour site. Your name. Your plans.").includes("drumbeat") || rules("I built it.\n\nYour site. Your name. Your plans.").includes("triplet-line"));
  expect("your stack", rules("I made this. Your site, your logins, your plans, your prices, your customers, your rules all stay put.").includes("your-stack"));
  expect("not x its y", rules("I think it's not a tool, it's a teammate.").includes("not-x-its-y"));
  expect("stock phrase", rules("I want to dive into how we did it.").includes("stock-phrase"));

  const voice = readVoice("# Voice\n\n## How I talk\n\n### Phrases I use\n- \"game changer\" | standup-2026-03-02.vtt | 4\n\n### Tells that are not me\n- \"circle the wagons\"\n\n### Shapes that are mine\n- rule-of-three | 9 of 12 samples\n\n## Corrections\n");
  expect("voice file parsed", voice.found && voice.mine.length === 1 && voice.notMe.length === 1 && voice.shapes[0] === "rule-of-three");
  expect("own phrase downgraded", !rules("I said it was a game changer for us.", { voice }).includes("stock-phrase"));
  expect("member tell raised", rules("I told the team to circle the wagons.", { voice }).includes("member-tell"));
  expect("own shape downgraded", !rules("I sell bread, cakes and pies. We bake rolls, buns and tarts. Our shop has tea, coffee and juice.", { voice }).includes("rule-of-three"));
  expect("kind reply skips your-stack", !rules("I checked your order. Your refund, your receipt, your label and your tracking number are in your inbox now, and your account shows it.", { kind: "reply" }).includes("your-stack"));
  expect("kind article skips first person", !rules("Sourdough needs a mature starter and a long proof.", { kind: "article" }).includes("no-first-person"));
  expect("segue label", rules("You ask how we got busy. Here's the honest answer. I filmed my day.").includes("segue-label"));
  expect("moral close is a warn", check("I funded it myself.\n\nIt was risky.\n\nIf you're funding a business, the trade is risk against control.").findings.some((f) => f.rule === "moral-close" && f.severity === "warn"));
  expect("chatbot phrase", rules("Thinking about it? Here's your sign. I started small.").includes("chatbot-phrase"));
  expect("engagement bait", rules("We baked a fresh batch today. Tag someone you'd share it with.").includes("engagement-bait"));
  expect("not just frame", rules("I hire for care, not just skill.").includes("not-x-its-y") && rules("I started small. You don't need a plan. You just need an oven.").includes("not-x-its-y"));
  expect("plain human post stays clean", check("I tried a new brownie today.\n\nIt cracked on top, which I love.\n\nIt's in the case until we sell out.").tells === 0);
  expect("fragment run", rules("I started as an apprentice. Carrying tools. Making tea. Learning from the old hands.").includes("fragment-run"));
  expect("urls ignored", check("I wrote it up here https://example.com/a-b-c-d.").tells === 0);

  const vtt = "WEBVTT\n\n1\n00:00:01.000 --> 00:00:03.000\nSo I basically opened the shop at six.\n\n2\n00:00:03.000 --> 00:00:06.000\nAnd honestly, honestly, it was a mess.\n";
  const t = transcriptText(vtt, "a.vtt");
  expect("vtt stripped", !/-->|WEBVTT/.test(t) && /opened the shop/.test(t));
  const p = profile([t, "I opened the shop at six again. I opened the shop late on Sunday. I opened the shop for the market."]);
  expect("profile counts phrases", p.recurring_phrases.some((x) => /opened the shop/.test(x.phrase)));
  expect("profile counts doubled words", p.doubled_words.some((x) => /honestly/.test(x.phrase)));
  expect("stutters are not emphasis", !profile(["And and then I I went back. It was really, really good."]).doubled_words.some((x) => /and and|i i/.test(x.phrase)));
  expect("unpunctuated source says so", /n\/a/.test(String(profile([Array(200).fill("so we bake bread").join(" ")]).avg_sentence_words)));

  if (fail.length) { console.log("voice-check selftest: FAIL " + fail.join("; ")); process.exit(1); }
  console.log("voice-check selftest: PASS (" + cases + " cases)");
  process.exit(0);
}

/* ------------------------------------------------------------------ *
 * CLI
 * ------------------------------------------------------------------ */

function usage(code) {
  const msg = "usage: node scripts/voice-check.mjs --file <path|-> [--kind " + KINDS.join("|") + "] [--root <kit folder>] [--voice <voice.md>] [--json]\n       node scripts/voice-check.mjs --profile <file> [...] [--json]\n       node scripts/voice-check.mjs --selftest";
  (code ? console.error : console.log)(msg);
  process.exit(code);
}

function main(argv) {
  if (argv.includes("--selftest")) return selftest();
  if (argv.includes("--help") || argv.includes("-h")) return usage(0);
  const json = argv.includes("--json");
  const val = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : undefined; };
  for (const stale of ["--profile-name", "--dest", "--platform"]) if (argv.includes(stale)) { console.error("voice-check: " + stale + " is not an option here. Use --kind."); process.exit(2); }

  if (argv.includes("--profile")) {
    const files = argv.slice(argv.indexOf("--profile") + 1).filter((a) => !a.startsWith("--"));
    if (!files.length) usage(2);
    const texts = [];
    for (const f of files) { try { texts.push(transcriptText(fs.readFileSync(f, "utf8"), f)); } catch { console.error("voice-check: cannot read " + f); process.exit(2); } }
    const p = profile(texts);
    if (json) { console.log(JSON.stringify(p, null, 2)); return; }
    console.log(`${p.sources} sources, ${p.words} words, ${p.sentences} sentences, ${p.avg_sentence_words} words a sentence on average`);
    const pct = (x) => (typeof x === "number" ? Math.round(x * 100) + "%" : x);
    console.log(`short sentences ${pct(p.short_sentence_share)}, questions ${pct(p.question_share)}, I/we per 100 words ${p.first_person_per_100_words}, you per 100 words ${p.you_per_100_words}, hedges ${p.hedges}`);
    console.log("recurring phrases: " + p.recurring_phrases.map((x) => `"${x.phrase}" ${x.count}`).join(", "));
    console.log("how sentences open: " + p.sentence_openers.map((x) => `"${x.opener}" ${x.count}`).join(", "));
    console.log("doubled words: " + (p.doubled_words.map((x) => `"${x.phrase}" ${x.count}`).join(", ") || "none"));
    console.log("shapes in their own words: " + (Object.entries(p.shapes_in_own_words).map(([k, v]) => `${k} ${v}`).join(", ") || "none"));
    return;
  }

  const file = val("--file");
  if (!file) usage(2);
  const kind = val("--kind") || "post";
  if (!KINDS.includes(kind)) { console.error("voice-check: --kind must be one of " + KINDS.join(", ")); process.exit(2); }
  let text;
  try { text = file === "-" ? fs.readFileSync(0, "utf8") : fs.readFileSync(file, "utf8"); } catch { console.error("voice-check: cannot read " + file); process.exit(2); }
  // The Social Media kit keeps the voice at voice/voice.md, the other kits at strategy/voice.md.
  const kitRoot = val("--root") || path.resolve(SCRIPT_DIR, "..");
  const candidates = val("--voice") ? [val("--voice")] : [path.join(kitRoot, "voice", "voice.md"), path.join(kitRoot, "strategy", "voice.md")];
  let voiceText = "";
  for (const c of candidates) { try { voiceText = fs.readFileSync(c, "utf8"); break; } catch { /* next */ } }
  const r = check(text, { kind, voice: readVoice(voiceText) });
  if (json) console.log(JSON.stringify({ file, ...r }, null, 2));
  else {
    console.log(`${file} [${kind}]: ${r.verdict.toUpperCase()} (${r.tells} tells, ${r.warns} warns)${r.voice_file ? "" : ", no How I talk section found, neutral rules only"}`);
    for (const f of r.findings) console.log(`  ${f.severity === "tell" ? "TELL" : "warn"}  ${f.rule.padEnd(18)} "${f.excerpt}"  ${f.why}`);
  }
  process.exit(r.tells ? 1 : 0);
}

if (process.argv[1] && path.resolve(process.argv[1]) === SELF) main(process.argv.slice(2));
