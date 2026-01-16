import { Link } from 'react-router-dom';
import { APP_CONFIG, ROUTES } from '../config/constants';

export default function Hero() {
  const { hero: heroImage } = APP_CONFIG.images;

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet={heroImage.desktop}
          />
          <source
            media="(min-width: 1280px)"
            srcSet={heroImage.tablet}
          />
          <source
            media="(min-width: 768px)"
            srcSet={heroImage.mobile}
          />
          <img
            alt={heroImage.alt}
            className="w-full h-full object-cover"
            src={heroImage.default}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-secondary text-primary font-bold px-4 py-1 rounded-full mb-6 transform -rotate-2">
            CALIDAD PREMIUM
          </div>
          <h1 className="font-display text-7xl md:text-9xl mb-4 leading-none text-shadow tracking-wide">
            MÁS RÁPIDO,<br />
            <span className="text-secondary">MÁS RICO.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-lg">
            Los mejores completos, hamburguesas y papas fritas de Copiapó, listos en minutos para matar tu hambre.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={ROUTES.menu}
              className="bg-secondary text-slate-900 font-bold px-8 py-4 rounded-xl text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Ver Menú Completo
            </Link>
            <a
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/30 transition-all"
              href="#locations"
            >
              Encuéntranos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

