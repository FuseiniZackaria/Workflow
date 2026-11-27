import Icon from './Icons.jsx';

const points = [
  'Skilled mechanics who diagnose first and explain clearly',
  'Quality spare parts from trusted brands',
  'All kinds of vehicles: Toyota, Nissan, Mitsubishi, Ford and more',
  'Repairs from small services to full engine replacement',
];

export default function About() {
  return (
    <section id="about" className="bg-ink-soft py-20">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <div className="relative">
          <img src="/images/team-at-work-1.jpg" alt="Dr. Festus mechanics at work" loading="lazy" className="w-full rounded-lg border border-ink-line object-cover" />
          <div className="absolute -bottom-5 -right-2 hidden rounded-md bg-brand px-5 py-3 font-display text-xl font-extrabold uppercase italic text-ink shadow-xl sm:block">
            Maintenance · Spare Parts · Modification
          </div>
        </div>
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">About us</p>
          <h2 className="section-title">Why <span>Dr. Festus?</span></h2>
          <p className="mt-4 text-zinc-300">
            Dr. Festus Mechanical &amp; Trading Ventures is a hands-on auto workshop and spare parts dealer on the Afienya Mobole Road. Our team treats every car like our own: we find the real problem, fix it properly and keep you informed along the way.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-zinc-200">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-ink"><Icon name="check" className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
          <a href="#book" className="btn btn-primary mt-8">Book Your Car In</a>
        </div>
      </div>
    </section>
  );
}
