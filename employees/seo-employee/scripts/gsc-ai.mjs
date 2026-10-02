#!/usr/bin/env node
// Validate native GSC Generative AI observations. Never infer AI data from Web totals.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
export function validate(rows) {
  const ids = new Set();
  return rows.map(r => {
    for (const k of ['id', 'property', 'start_date', 'end_date', 'captured_at', 'evidence', 'display_value']) if (typeof r[k] !== 'string' || !r[k]) throw new Error(`Missing ${k}`);
    if (r.schema !== 1 || ids.has(r.id)) throw new Error('Invalid schema or duplicate observation'); ids.add(r.id);
    if (!['gsc-generative-ai-search', 'gsc-generative-ai-discover'].includes(r.report)) throw new Error('Only native GSC Generative AI reports belong here');
    if (r.metric !== 'impressions') throw new Error('This schema measures impressions, not clicks, mentions or sales');
    const validDate = d => /^\d{4}-\d{2}-\d{2}$/.test(d) && !Number.isNaN(Date.parse(d)) && new Date(d).toISOString().slice(0, 10) === d;
    if (!validDate(r.start_date) || !validDate(r.end_date) || r.start_date > r.end_date || Number.isNaN(Date.parse(r.captured_at))) throw new Error('Invalid reporting dates');
    if (r.timezone !== 'America/Los_Angeles') throw new Error('Preserve GSC reporting timezone');
    if (!['property', 'page', 'country', 'device', 'date'].includes(r.dimension)) throw new Error('Invalid dimension');
    if (!r.filters || typeof r.filters !== 'object' || Array.isArray(r.filters) || typeof r.preliminary !== 'boolean') throw new Error('Filters and preliminary status must be explicit');
    if (!['property', 'page'].includes(r.aggregation)) throw new Error('Record aggregation');
    if (r.dimension !== 'property' && (typeof r.dimension_value !== 'string' || !r.dimension_value)) throw new Error('Dimension needs a value');
    if (r.dimension === 'page' && r.aggregation !== 'page') throw new Error('Page rows need page aggregation');
    if (!['available', 'unavailable', 'not-reported'].includes(r.availability)) throw new Error('Invalid availability');
    if (r.availability === 'available') {
      if (!Number.isInteger(r.value) || r.value < 0 || ['~', '-', ''].includes(r.display_value.trim())) throw new Error('Observed impressions need a nonnegative integer and numeric display');
    } else if (r.value !== null || !r.reason) throw new Error('Unavailable data is null with a reason, never zero');
    if (r.source === 'api' && r.native_report_verified !== true) throw new Error('API must explicitly expose this native report');
    if (!['ui', 'export', 'api'].includes(r.source)) throw new Error('Invalid source');
    if (r.source === 'export' && r.value === 0 && r.numeric_zero_verified !== true) throw new Error('Export zero needs verification against UI because unavailable markers export as zero');
    return r;
  });
}
export function compare(current, previous) {
  validate([current, previous]);
  const keys = ['property', 'report', 'metric', 'timezone', 'dimension', 'dimension_value', 'aggregation'];
  const stable = v => JSON.stringify(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)));
  if (keys.some(k => current[k] !== previous[k]) || stable(current.filters) !== stable(previous.filters)) return { comparable: false, reason: 'scope changed' };
  if (current.availability !== 'available' || previous.availability !== 'available' || current.preliminary || previous.preliminary) return { comparable: false, reason: 'missing or preliminary data' };
  const duration = r => Date.parse(r.end_date) - Date.parse(r.start_date);
  if (duration(current) !== duration(previous) || previous.end_date >= current.start_date) return { comparable: false, reason: 'unequal or overlapping windows' };
  return { comparable: true, delta: current.value - previous.value, relative_change: previous.value ? (current.value - previous.value) / previous.value : null };
}
function selftest() {
  const row = { schema: 1, id: 'fictional-1', property: 'sc-domain:example.com', report: 'gsc-generative-ai-search', metric: 'impressions', start_date: '2026-09-14', end_date: '2026-09-20', captured_at: '2026-09-23T00:00:00Z', timezone: 'America/Los_Angeles', dimension: 'property', aggregation: 'property', filters: {}, preliminary: false, availability: 'available', value: 12, display_value: '12', evidence: 'tracking/capture.txt', source: 'ui' };
  const newer = { ...row, id: 'fictional-2', start_date: '2026-09-21', end_date: '2026-09-27', value: 18, display_value: '18' };
  assert.equal(compare(newer, row).delta, 6);
  assert.equal(compare({ ...newer, preliminary: true }, row).comparable, false);
  assert.equal(compare({ ...newer, filters: { country: 'CAN' } }, row).comparable, false);
  assert.throws(() => validate([{ ...row, report: 'web' }]));
  assert.throws(() => validate([{ ...row, report: 'gemini-app' }]));
  assert.throws(() => validate([{ ...row, availability: 'unavailable', value: 0, reason: 'not visible' }]));
  assert.throws(() => validate([{ ...row, source: 'export', value: 0, display_value: '-' }]));
  assert.throws(() => validate([{ ...row, source: 'export', value: 0, display_value: '0' }]));
  assert.equal(validate([{ ...row, value: 0, display_value: '0' }])[0].value, 0);
  assert.throws(() => validate([{ ...row, source: 'api' }]));
  console.log('gsc-ai: selftest PASS');
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (process.argv.includes('--selftest')) selftest();
    else {
      const i = process.argv.indexOf('--input'); if (i < 0) throw new Error('Usage: gsc-ai.mjs --input observations.jsonl | --selftest');
      const rows = validate(fs.readFileSync(process.argv[i + 1], 'utf8').split(/\r?\n/).filter(x => x.trim()).map(JSON.parse));
      console.log(JSON.stringify({ valid: rows.length, property_totals: rows.filter(r => r.dimension === 'property'), note: 'Do not sum page rows to manufacture a property total or add AI to Web totals.' }, null, 2));
    }
  } catch (e) { console.error(e.message); process.exitCode = 1; }
}
