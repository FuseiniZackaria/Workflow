import { useCallback, useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { gallery } from '../data/site.js';

export default function Gallery() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const move = useCallback((d) => setActive((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, move]);

  return (
    <section id="gallery" className="bg-ink py-20">
      <div className="container-x">
        <p className="font-display text-lg font-bold uppercase tracking-widest text-brand">Our work</p>
        <h2 className="section-title">Work <span>Gallery</span></h2>
        <p className="mt-3 max-w-2xl text-zinc-400">Real jobs from our workshop. Tap a photo to view it larger.</p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-lg border border-ink-line ${i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" style={{ aspectRatio: i === 0 ? '4/3' : '1/1' }} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-left text-sm font-medium text-white">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" onClick={close}>
          <button onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Close"><Icon name="close" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6" aria-label="Previous"><Icon name="left" /></button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].alt} className="max-h-[80vh] w-auto rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-zinc-300">{gallery[active].caption}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6" aria-label="Next"><Icon name="right" /></button>
        </div>
      )}
    </section>
  );
}
