import { parts, site } from '../data/site.js';

export default function Parts() {
  return (
    <section id="parts" className="bg-ink-soft py-20">
      <div className="container-x">
        <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">Trading</p>
        <h2 className="section-title">Genuine <span>Spare Parts</span></h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          We stock trusted brands for Japanese, European and American vehicles. Tell us your car and we will get the right part. Call for availability and prices.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parts.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-lg border border-ink-line bg-ink-card">
              <img src={p.src} alt={`${p.brand} ${p.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="p-4">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">{p.brand}</p>
                <h3 className="font-display text-xl font-bold uppercase text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-zinc-300">
          Looking for something else? Call{' '}
          <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-brand hover:underline">{site.phones[0].label}</a>{' '}
          or message us on WhatsApp.
        </p>
      </div>
    </section>
  );
}
