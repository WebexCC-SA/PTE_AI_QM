// Builds docs/assets/credentials.json: one AES-GCM blob per attendee ID (148-177).
// Key = PBKDF2(PASSWORD + ":" + attendeeId), so the page can only decrypt with the right ID + password.
// Usage: node tools/build-credentials.mjs   (re-run whenever docs/assets/PODs.xlsx changes)
import { execFileSync } from "node:child_process";
import { webcrypto as crypto } from "node:crypto";
import { writeFileSync } from "node:fs";

const PASSWORD = "PTE2026!";
const ITER = 100000;
const XLSX = "docs/assets/PODs.xlsx";
const OUT = "docs/assets/credentials.json";
const MIN = 148, MAX = 177;

const unzip = (f) => execFileSync("unzip", ["-p", XLSX, f], { encoding: "utf8", maxBuffer: 1e8 });
const unesc = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
const strings = [...unzip("xl/sharedStrings.xml").matchAll(/<si>([\s\S]*?)<\/si>/g)]
  .map(m => unesc([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(t => t[1]).join("")));

const rows = [...unzip("xl/worksheets/sheet1.xml").matchAll(/<row [^>]*>([\s\S]*?)<\/row>/g)].map(r => {
  const o = {};
  for (const c of r[1].matchAll(/<c r="([A-Z]+)\d+"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
    const v = /<v>([\s\S]*?)<\/v>/.exec(c[3] || "");
    if (v) o[c[1]] = /t="s"/.test(c[2]) ? strings[+v[1]] : v[1];
  }
  return o;
});

const enc = new TextEncoder();
const b64 = (u) => Buffer.from(u).toString("base64");
async function key(id, salt) {
  const base = await crypto.subtle.importKey("raw", enc.encode(`${PASSWORD}:${id}`), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, base,
    { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
}

const out = { iter: ITER, entries: {} };
for (const r of rows.slice(1)) {
  const id = +r.B;
  if (!(id >= MIN && id <= MAX)) continue;
  if (!r.G || !r.H) throw new Error(`Row for ID ${id} is missing admin username/password`);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await key(id, salt),
    enc.encode(JSON.stringify({ username: r.H, password: r.G })));
  out.entries[id] = { s: b64(salt), i: b64(iv), c: b64(new Uint8Array(ct)) };
}
const n = Object.keys(out.entries).length;
if (n !== MAX - MIN + 1) throw new Error(`Expected ${MAX - MIN + 1} attendees, found ${n}`);
writeFileSync(OUT, JSON.stringify(out));
console.log(`Wrote ${n} entries to ${OUT}`);
