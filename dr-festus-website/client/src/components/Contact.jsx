import { useState } from 'react';
import Icon from './Icons.jsx';
import { site } from '../data/site.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please call us instead.');
      setStatus({ state: 'success', msg: 'Message sent. Thank you, we will be in touch soon.' });
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: err.message });
    }
  }

  const info = [
    { icon: 'pin', title: 'Visit us', body: <span>{site.address}</span> },
    {
      icon: 'phone',
      title: 'Call us',
      body: (
        <span className="flex flex-col">
          {site.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-brand">{p.label}</a>
          ))}
        </span>
      ),
    },
    ...(site.email ? [{ icon: 'mail', title: 'Email', body: <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a> }] : []),
    ...(site.hours ? [{ icon: 'clock', title: 'Opening hours', body: <span>{site.hours}</span> }] : []),
  ];

  return (
    <section id="contact" className="bg-ink-soft py-20">
      <div className="container-x">
        <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">Get in touch</p>
        <h2 className="section-title">Contact <span>Us</span></h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {info.map((i) => (
              <div key={i.title} className="flex items-start gap-4 rounded-lg border border-ink-line bg-ink-card p-5">
                <span className="rounded-md bg-brand p-3 text-ink"><Icon name={i.icon} /></span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white">{i.title}</h3>
                  <div className="text-zinc-300">{i.body}</div>
                </div>
              </div>
            ))}
            <iframe
              title="Map to Dr. Festus Mechanical & Trading Ventures"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full rounded-lg border border-ink-line"
            />
          </div>

          <form onSubmit={submit} className="space-y-4 rounded-lg border border-ink-line bg-ink-card p-6" noValidate>
            <h3 className="font-display text-2xl font-bold uppercase text-white">Send us a message</h3>
            <div>
              <label className="label" htmlFor="c-name">Name *</label>
              <input id="c-name" className="field" value={form.name} onChange={set('name')} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="c-phone">Phone *</label>
                <input id="c-phone" type="tel" className="field" value={form.phone} onChange={set('phone')} required />
              </div>
              <div>
                <label className="label" htmlFor="c-email">Email (optional)</label>
                <input id="c-email" type="email" className="field" value={form.email} onChange={set('email')} />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="c-message">Message *</label>
              <textarea id="c-message" rows="5" className="field" value={form.message} onChange={set('message')} required />
            </div>
            <button type="submit" disabled={status.state === 'loading'} className="btn btn-primary w-full disabled:opacity-60">
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.state === 'success' && <p role="status" className="rounded-md bg-green-500/15 p-3 text-green-300">{status.msg}</p>}
            {status.state === 'error' && <p role="alert" className="rounded-md bg-red-500/15 p-3 text-red-300">{status.msg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
