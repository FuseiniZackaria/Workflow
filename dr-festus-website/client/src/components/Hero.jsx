import Icon from './Icons.jsx';
import { site } from '../data/site.js';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/shop-video.mp4"
        poster="/images/video-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-x relative z-10 pb-16 pt-28">
        <p className="mb-4 inline-block rounded bg-brand px-3 py-1 font-display text-sm font-bold uppercase tracking-widest text-ink">
          {site.tagline}
        </p>
        <h1 className="font-display text-7xl font-extrabold uppercase italic leading-[0.9] text-white sm:text-8xl md:text-9xl">
          Dr.
          <br />
          <span className="text-brand">Festus</span>
        </h1>
        <p className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
          Mechanical &amp; Trading Ventures
        </p>
        <p className="mt-5 max-w-xl text-lg text-zinc-300">
          Honest, skilled car repair and quality spare parts at Afienya. From a simple service to a full engine job, we get you back on the road.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#book" className="btn btn-primary">Book an Appointment</a>
          <a href={`tel:${site.phones[0].tel}`} className="btn btn-outline">
            <Icon name="phone" className="h-5 w-5" /> Call Now
          </a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-zinc-300">
          <Icon name="pin" className="h-5 w-5 text-brand" /> {site.address}
        </p>
      </div>
    </section>
  );
}
