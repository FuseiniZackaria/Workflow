import { WhatsAppIcon } from './Icons.jsx';
import { site } from '../data/site.js';

export default function FloatingContact() {
  const text = encodeURIComponent('Hello Dr. Festus, I would like to enquire about a service.');
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl transition hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}
