import { Link } from 'react-router-dom';
import FooterSection from './FooterSection';

export default function FooterCompany() {
  return (
    <div className="lg:col-span-1">
      <div className="mb-6">
        <Link to="/" className="font-display text-2xl text-primary hover:opacity-80 transition-opacity">
          EL CHISPA EXPRESS
        </Link>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
        Sirviendo los mejores sabores. Rápido, fresco y siempre delicioso.
      </p>
      <div className="flex gap-3">
        <a
          className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
          href="https://www.instagram.com/elchispaexpress/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <span className="material-icons text-xl">camera_alt</span>
        </a>
      </div>
    </div>
  );
}

