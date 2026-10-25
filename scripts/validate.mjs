// Validates every locale file against en.js. Usage: node scripts/validate.mjs
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = 'en';
const CODE_PATTERN = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;

function flatten(obj, prefix = '') {
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    const full = prefix + key;
    if (value && typeof value === 'object' && !Array.isArray(value)) Object.assign(out, flatten(value, full + '.'));
    else out[full] = value;
  }
  return out;
}

const placeholders = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const tokens = (s) => [...s.matchAll(/\$\{[^}]*\}\}?/g)].map((m) => m[0]).sort().join(',');
const hasHtml = (s) => /<\/?[a-z][^>]*>/i.test(s);

async function load(file) {
  return flatten((await import(pathToFileURL(path.join(root, file)).href)).default);
}

const files = readdirSync(root).filter((f) => f.endsWith('.js'));
const source = await load(`${SOURCE}.js`);
let failed = false;

for (const file of files) {
  const code = file.slice(0, -3);
  if (code === SOURCE) continue;
  const errors = [];

  if (!CODE_PATTERN.test(code)) errors.push(`File name "${file}" is not a valid locale code (e.g. fr, pt-BR).`);

  let messages;
  try {
    messages = await load(file);
  } catch (error) {
    console.log(`::error file=${file}::Could not load ${file}: ${error.message}`);
    failed = true;
    continue;
  }

  for (const key of Object.keys(source)) {
    if (!(key in messages)) errors.push(`Missing key: ${key}`);
  }
  for (const key of Object.keys(messages)) {
    if (!(key in source)) errors.push(`Unknown key (not in en.js): ${key}`);
  }
  for (const [key, value] of Object.entries(messages)) {
    if (!(key in source)) continue;
    if (typeof value !== 'string') {
      errors.push(`Not a string: ${key}`);
      continue;
    }
    if (!value.trim()) errors.push(`Empty value: ${key}`);
    if (placeholders(value) !== placeholders(source[key])) {
      errors.push(`Placeholders differ in ${key}: expected {${placeholders(source[key])}} but found {${placeholders(value)}}`);
    }
    if (tokens(value) !== tokens(source[key])) {
      errors.push(`Snippet tokens differ in ${key}: expected "${tokens(source[key])}" but found "${tokens(value)}"`);
    }
    if (hasHtml(value) && !hasHtml(source[key])) errors.push(`HTML is not allowed: ${key}`);
  }

  if (errors.length) {
    failed = true;
    console.log(`\n${file}: ${errors.length} problem(s)`);
    for (const message of errors) console.log(`::error file=${file}::${message}`);
  } else {
    console.log(`${file}: OK (${Object.keys(messages).length} keys)`);
  }
}

if (failed) {
  console.log('\nValidation failed. Make every locale match en.js.');
  process.exit(1);
}
console.log('\nAll locales match en.js.');
