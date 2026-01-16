export default function Features() {
  return (
    <section className="py-16 transition-colors duration-300" style={{ backgroundColor: 'var(--features-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl shadow-xl transition-colors duration-300" style={{
            backgroundColor: 'var(--card-bg)',
            boxShadow: '0 20px 25px -5px var(--card-shadow), 0 10px 10px -5px var(--card-shadow)'
          }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-3xl text-primary">speed</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-100">Entrega Veloz</h3>
            <p className="transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
              Porque sabemos que cuando el hambre ataca, cada minuto cuenta.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-xl transition-colors duration-300" style={{
            backgroundColor: 'var(--card-bg)',
            boxShadow: '0 20px 25px -5px var(--card-shadow), 0 10px 10px -5px var(--card-shadow)'
          }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-3xl text-secondary">star</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-100">Sabor Único</h3>
            <p className="transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
              Ingredientes frescos y nuestra receta secreta "Chispa".
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-xl transition-colors duration-300" style={{
            backgroundColor: 'var(--card-bg)',
            boxShadow: '0 20px 25px -5px var(--card-shadow), 0 10px 10px -5px var(--card-shadow)'
          }}>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-3xl text-accent">eco</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-100">Todo Fresco</h3>
            <p className="transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
              Preparamos todo al momento para garantizar la máxima calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

