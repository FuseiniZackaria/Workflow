import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { saveSubmission, listSubmissions } from './store.js';
import { sendNotification } from './mailer.js';
import { validateBooking, validateContact } from './validate.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50kb' }));

// Very small in-memory rate limit: max 10 submissions / 10 min / IP
const hits = new Map();
function rateLimit(req, res, next) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(req.ip) || []).filter((t) => now - t < windowMs);
  if (list.length >= 10) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' });
  }
  list.push(now);
  hits.set(req.ip, list);
  next();
}

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/appointments', rateLimit, async (req, res) => {
  const { errors, data } = validateBooking(req.body);
  if (errors.length) return res.status(400).json({ ok: false, error: errors.join(' ') });
  const record = await saveSubmission('appointment', data);
  sendNotification('New appointment request', data).catch((e) => console.error('Mail error:', e.message));
  console.log('[appointment]', data.name, data.phone, data.service);
  res.status(201).json({ ok: true, id: record.id });
});

app.post('/api/contact', rateLimit, async (req, res) => {
  const { errors, data } = validateContact(req.body);
  if (errors.length) return res.status(400).json({ ok: false, error: errors.join(' ') });
  const record = await saveSubmission('contact', data);
  sendNotification('New website message', data).catch((e) => console.error('Mail error:', e.message));
  console.log('[contact]', data.name, data.phone);
  res.status(201).json({ ok: true, id: record.id });
});

// Simple owner view: GET /api/submissions?key=ADMIN_KEY (only enabled if ADMIN_KEY is set)
app.get('/api/submissions', async (req, res) => {
  if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) {
    return res.status(404).json({ ok: false });
  }
  res.json({ ok: true, items: await listSubmissions() });
});

// Production: serve the built React app
const dist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.listen(PORT, () => console.log(`Dr. Festus API running on http://localhost:${PORT}`));
