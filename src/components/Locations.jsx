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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.534019971707!2d-70.31480022397565!3d-27.39026461332743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698053a13160a3d%3A0x7fc39194c39d8be3!2sEl%20Chispa%20Express!5e0!3m2!1spt-BR!2scl!4v1768528824598!5m2!1spt-BR!2scl"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación El Chispa Express"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/ez8SKdfYqAGbJuWQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors shadow-lg"
            >
              <span className="material-icons">open_in_new</span>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

