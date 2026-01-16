import { Link } from 'react-router-dom';

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
    </div>
  );
}

