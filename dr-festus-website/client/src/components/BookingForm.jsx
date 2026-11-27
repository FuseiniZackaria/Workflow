import { useState } from 'react';
import { services } from '../data/site.js';

const empty = { name: '', phone: '', email: '', vehicle: '', service: '', date: '', message: '' };

export default function BookingForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const today = new Date().toISOString().split('T')[0];

  async function submit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please call us instead.');
      setStatus({ state: 'success', msg: 'Thank you! Your request has been received. We will call you shortly to confirm.' });
      setForm(empty);
    } catch (err) {
      setStatus({ state: 'error', msg: err.message });
    }
  }

  return (
    <section id="book" className="relative bg-ink py-20">
      <div className="container-x grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">Appointments</p>
          <h2 className="section-title">Book a <span>Service</span></h2>
          <p className="mt-4 text-zinc-300">
            Tell us about your vehicle and what you need. We will call you to confirm a time that suits you.
          </p>
          <img src="/images/mitsubishi-pickup.jpg" alt="Mechanic checking a Mitsubishi pickup engine" loading="lazy" className="mt-6 hidden rounded-lg border border-ink-line object-cover lg:block" />
        </div>

        <form onSubmit={submit} className="space-y-4 rounded-lg border border-ink-line bg-ink-card p-6 lg:col-span-3" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="b-name">Full name *</label>
              <input id="b-name" className="field" value={form.name} onChange={set('name')} placeholder="Your name" required />
            </div>
            <div>
              <label className="label" htmlFor="b-phone">Phone number *</label>
              <input id="b-phone" type="tel" className="field" value={form.phone} onChange={set('phone')} placeholder="e.g. 055 123 4567" required />
            </div>
            <div>
              <label className="label" htmlFor="b-vehicle">Vehicle (make, model, year) *</label>
              <input id="b-vehicle" className="field" value={form.vehicle} onChange={set('vehicle')} placeholder="e.g. Toyota Corolla 2015" required />
            </div>
            <div>
              <label className="label" htmlFor="b-email">Email (optional)</label>
              <input id="b-email" type="email" className="field" value={form.email} onChange={set('email')} placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="b-service">Service needed *</label>
              <select id="b-service" className="field" value={form.service} onChange={set('service')} required>
                <option value="">Select a service…</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Spare Parts Purchase</option>
                <option>Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="b-date">Preferred date</label>
              <input id="b-date" type="date" min={today} className="field" value={form.date} onChange={set('date')} />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="b-message">Describe the problem (optional)</label>
            <textarea id="b-message" rows="4" className="field" value={form.message} onChange={set('message')} placeholder="e.g. Engine is overheating and making noise…" />
          </div>
          <button type="submit" disabled={status.state === 'loading'} className="btn btn-primary w-full disabled:opacity-60">
            {status.state === 'loading' ? 'Sending…' : 'Request Appointment'}
          </button>
          {status.state === 'success' && <p role="status" className="rounded-md bg-green-500/15 p-3 text-green-300">{status.msg}</p>}
          {status.state === 'error' && <p role="alert" className="rounded-md bg-red-500/15 p-3 text-red-300">{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}
