export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <img
          alt="Hot Dog and Fries close up"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Ju3qp2Y1TowTD_3BSvJxdGTWwjjJzW7Ydlg_lIs28OmvDX7_gKuie3Zld0TS4svlArRiaeaBBfUPKMUt5-jyMCKJYy07GUbbw4t-y97AOBsSMUEsSwc40QAeEdf7EZnY2KTUlHGIttj7sNNKVzG46dDGICgA8jIa9_v2I50IOuNbEApK3s9WRTjFEzPyxNd-gOkDOUho0yDL-7U9Y_kKP0Y9l2S2e4RHIb9uudtj8yX915O7e_uFiv8P35WBbKpfVUMmpXKUyko"
        />
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
            Los mejores hot dogs, hamburguesas y papas fritas de la ciudad, listos en minutos para matar tu hambre.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-secondary text-slate-900 font-bold px-8 py-4 rounded-xl text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              href="#menu"
            >
              Ver Menú Completo
            </a>
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

