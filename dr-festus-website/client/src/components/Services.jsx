import Icon from './Icons.jsx';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20">
      <div className="container-x">
        <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">What we do</p>
        <h2 className="section-title">Our <span>Services</span></h2>
        <p className="mt-3 max-w-2xl text-zinc-400">Whatever your vehicle needs, our team has the skills and the tools to handle it.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group rounded-lg border border-ink-line bg-ink-card p-6 transition hover:-translate-y-1 hover:border-brand">
              <div className="mb-4 inline-flex rounded-md bg-brand p-3 text-ink">
                <Icon name={s.icon} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#book" className="btn btn-primary">Book a Service</a>
        </div>
      </div>
    </section>
  );
}
