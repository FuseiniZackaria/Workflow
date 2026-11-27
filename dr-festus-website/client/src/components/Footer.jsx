import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-black py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-400 md:flex-row md:text-left">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase italic text-white">DR. <span className="text-brand">FESTUS</span></p>
          <p>Mechanical &amp; Trading Ventures · {site.tagline}</p>
        </div>
        <div>
          <p>{site.address}</p>
          <p>{site.phones.map((p) => p.label).join(' / ')}</p>
        </div>
        <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
