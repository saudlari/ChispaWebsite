export default function MenuHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 relative flex flex-col items-center text-center">
      <h1 className="font-display text-6xl md:text-8xl text-primary drop-shadow-md mb-4 uppercase tracking-tighter">
        Nuestro Menú
      </h1>
      <p className="text-xl md:text-2xl text-accent font-bold max-w-2xl">MÁS RÁPIDO, MÁS RICO</p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <div className="bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="material-icons text-primary">delivery_dining</span> Delivery Gratis
        </div>
        <div className="bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="material-icons text-accent">verified</span> Calidad Premium
        </div>
      </div>
    </div>
  );
}

