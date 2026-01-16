import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[40px] p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent opacity-20 rounded-full -ml-10 -mb-10"></div>
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">¿MUCHA HAMBRE?</h2>
            <p className="text-white/90 text-xl mb-8">
              No esperes más. Pide por nuestra web o ven a visitarnos en cualquiera de nuestras sucursales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/order" className="bg-secondary text-primary font-bold px-10 py-4 rounded-2xl text-xl shadow-lg hover:scale-105 transition-transform inline-block">
                ORDENAR YA
              </Link>
              <a href="#locations" className="bg-white text-primary font-bold px-10 py-4 rounded-2xl text-xl shadow-lg border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all inline-block">
                LOCALIZAR TIENDA
              </a>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-1/3">
          </div>
        </div>
      </div>
    </section>
  );
}

