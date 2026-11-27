import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'data');
const file = path.join(dir, 'submissions.json');

async function readAll() {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return [];
  }
}

export async function saveSubmission(type, data) {
  await fs.mkdir(dir, { recursive: true });
  const items = await readAll();
  const record = { id: crypto.randomUUID(), type, createdAt: new Date().toISOString(), ...data };
  items.push(record);
  await fs.writeFile(file, JSON.stringify(items, null, 2));
  return record;
}

export const listSubmissions = readAll;
