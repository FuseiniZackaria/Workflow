import { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { site } from '../data/site.js';

const links = [
  ['Services', '#services'],
  ['Spare Parts', '#parts'],
  ['Gallery', '#gallery'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'bg-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-2xl font-extrabold uppercase italic leading-none text-white">
          DR. <span className="text-brand">FESTUS</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium uppercase tracking-wider text-zinc-300 transition hover:text-brand">
              {label}
            </a>
          ))}
          <a href="#book" className="btn btn-primary !px-4 !py-2 !text-base">Book Now</a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a href={`tel:${site.phones[0].tel}`} className="rounded-md bg-brand p-2 text-ink" aria-label="Call us">
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-white" aria-label="Toggle menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 pb-5 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-lg font-medium text-zinc-200 hover:bg-white/5 hover:text-brand">
              {label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Book an Appointment</a>
        </nav>
      )}
    </header>
  );
}
