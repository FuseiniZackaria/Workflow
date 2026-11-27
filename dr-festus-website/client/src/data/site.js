// ---- Edit this file to change the business details shown on the site ----
export const site = {
  name: 'Dr. Festus',
  fullName: 'Dr. Festus Mechanical & Trading Ventures',
  tagline: 'Maintenance · Spare Parts · Modification',
  address: 'Afienya Mobole Road, Ghana',
  mapQuery: 'Afienya Mobole Road, Ghana',
  phones: [
    { label: '+233 55 245 3736', tel: '+233552453736' },
    { label: '+233 55 477 5792', tel: '+233554775792' },
  ],
  whatsapp: '233552453736', // number for the WhatsApp button (no + sign)
  email: '', // add an email here to show it in the contact section
  hours: '', // e.g. 'Mon – Sat: 7:30am – 6:00pm'. Leave empty to hide.
};

export const services = [
  { icon: 'wrench', title: 'Standard Maintenance', text: 'Oil and filter changes, fluid top-ups, brake and tyre checks to keep your car dependable.' },
  { icon: 'engine', title: 'Engine & Auto Service', text: 'Diagnosis, tune-ups, cylinder head, timing and full engine overhauls and replacements.' },
  { icon: 'snow', title: 'Air Conditioner Repair', text: 'Gas refill, leak checks, compressor and cooling repairs so you stay cool on the road.' },
  { icon: 'bolt', title: 'Electrical Services', text: 'Wiring harness repairs, alternators, starters, sensors, lights and battery systems.' },
  { icon: 'pipe', title: 'Exhaust Service', text: 'Inspection, repair and replacement of exhaust pipes, mufflers and manifolds.' },
  { icon: 'gear', title: 'Transmission Service', text: 'Gearbox servicing and repairs for manual and automatic vehicles.' },
  { icon: 'shield', title: 'Full Maintenance', text: 'A complete top-to-bottom service so your vehicle is safe, reliable and road-ready.' },
  { icon: 'spark', title: 'Modification', text: 'Performance and styling upgrades done properly and tailored to your vehicle.' },
];

export const gallery = [
  { src: '/images/team-at-work-2.jpg', alt: 'Dr. Festus team working on a Nissan and a Toyota', caption: 'The Dr. Festus team at work' },
  { src: '/images/mitsubishi-pickup.jpg', alt: 'Mechanic inspecting the engine of a Mitsubishi pickup', caption: 'Mitsubishi pickup: engine bay inspection' },
  { src: '/images/toyota-corolla.jpg', alt: 'Toyota Corolla with the bonnet open for engine service', caption: 'Toyota Corolla: engine service' },
  { src: '/images/engine-cylinder-head.jpg', alt: 'Cylinder head and timing assembly exposed during repair', caption: 'Cylinder head and timing work' },
  { src: '/images/engine-removed.jpg', alt: 'Engine lifted out of an SUV with a chain hoist', caption: 'Full engine removal with chain hoist' },
  { src: '/images/engine-wiring-team.jpg', alt: 'Mechanics in Dr. Festus shirts handling an engine wiring harness', caption: 'Engine and wiring harness work' },
];

export const parts = [
  { src: '/images/bosch-plugs-2.jpg', brand: 'Bosch', name: 'Super 4 Spark Plugs', detail: 'VR7SPP33 · pack of 4' },
  { src: '/images/denso-plugs-1.jpg', brand: 'Densol', name: 'Iridium Power Spark Plugs', detail: 'For Japanese & USA vehicles · pack of 4' },
  { src: '/images/titan-fluid.jpg', brand: 'Fuchs', name: 'Titan CHF 11S Fluid', detail: 'Power steering & central hydraulic fluid · 1 L' },
  { src: '/images/brake-pads.jpg', brand: 'AS Tech', name: 'Brake Pads', detail: 'Ask us for your vehicle model' },
];
