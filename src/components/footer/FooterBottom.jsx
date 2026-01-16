import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function FooterBottom() {
  return (
    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2026 El Chispa Express. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Hecho con <span className="text-red-500">❤️</span> por <a href="https://iwalab.site" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">IwaLab</a> por un futuro más sostenible.
          </p>
        </div>
        <div className="flex justify-center">
          <WebsiteCarbonBadge url="https://chispaexpress.netlify.app/" />
        </div>
      </div>
    </div>
  );
}

