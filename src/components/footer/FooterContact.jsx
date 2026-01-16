import FooterSection from './FooterSection';

export default function FooterContact() {
  return (
    <FooterSection title="Contacto">
      <ul className="space-y-3">
        <li>
          <a 
            href="tel:+56936400558"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm group"
          >
            <span className="material-icons text-base group-hover:scale-110 transition-transform">phone</span>
            <span className="font-semibold">9 3640 0558</span>
          </a>
        </li>
        <li>
          <a 
            href="https://wa.me/56936400558"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm group"
          >
            <span className="material-icons text-base group-hover:scale-110 transition-transform">chat</span>
            <span className="font-semibold">WhatsApp</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/elchispaexpress/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm group"
          >
            <span className="material-icons text-base group-hover:scale-110 transition-transform">camera_alt</span>
            <span className="font-semibold">Instagram</span>
          </a>
        </li>
      </ul>
    </FooterSection>
  );
}

