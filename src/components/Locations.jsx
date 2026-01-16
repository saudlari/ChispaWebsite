import { APP_CONFIG } from '../config/constants';

export default function Locations() {
  return (
    <section className="py-20 transition-colors duration-300" id="locations" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-4">NUESTRAS SUCURSALES</h2>
          <p className="text-lg transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
            Encuéntranos y disfruta de nuestros deliciosos productos
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--border-color)' }}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={APP_CONFIG.maps.embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación El Chispa Express"
                aria-label="Mapa de ubicación de El Chispa Express"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href={APP_CONFIG.maps.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Abrir ubicación en Google Maps"
            >
              <span className="material-icons" aria-hidden="true">open_in_new</span>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

