export default function ProductCard({ product, category, onAddToCart, layout = 'vertical' }) {
  const handleAddToCart = () => {
    onAddToCart(product, category);
  };

  if (layout === 'horizontal') {
    return (
      <div className="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
          <img
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={product.image}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
            {product.priceDisplay}
          </div>
          {product.badge && (
            <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-tighter">
              {product.badge}
            </div>
          )}
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-slate-100 group-hover:text-primary transition-colors mb-4">{product.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{product.description}</p>
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-accent text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-colors"
          >
            <span className="material-icons">add_shopping_cart</span> Add to Order
          </button>
        </div>
      </div>
    );
  }

  if (layout === 'compact') {
    return (
      <div
        className="group dark-card p-4 border rounded-2xl shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300"
        style={{ 
          backgroundColor: 'var(--card-bg)', 
          borderColor: 'var(--border-color)',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <div className="relative overflow-hidden rounded-xl mb-4 h-40">
          <img 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            src={product.image}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-2 right-2 bg-primary text-white font-bold px-2 py-1 rounded-full shadow-lg text-xs">
            {product.priceDisplay}
          </div>
          {product.badge && (
            <div className="absolute top-2 left-2 bg-accent text-white font-bold px-2 py-1 rounded-full text-xs uppercase tracking-tighter">
              {product.badge}
            </div>
          )}
        </div>
        <div className="mb-2">
          <h4 className="font-bold text-slate-100 group-hover:text-primary transition-colors">{product.name}</h4>
        </div>
        <p className="text-xs mb-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{product.description}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
        >
          <span className="material-icons">add_shopping_cart</span> Add to Order
        </button>
      </div>
    );
  }

  if (layout === 'icon') {
    return (
      <div 
        className="text-center group cursor-pointer"
        onClick={handleAddToCart}
      >
        <div className="w-20 h-20 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-2 group-hover:bg-secondary transition-colors">
          <span className="material-icons text-4xl text-slate-400 group-hover:text-primary">{product.icon}</span>
        </div>
        <span className="block font-bold">{product.name}</span>
        <span className="text-primary">{product.priceDisplay}</span>
      </div>
    );
  }

  return (
    <div
      className="group dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      style={{ 
        backgroundColor: 'var(--card-bg)', 
        borderColor: 'var(--border-color)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={product.image}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          fetchPriority="low"
        />
        <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
          {product.priceDisplay}
        </div>
        {product.badge && (
          <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-tighter">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="mb-6 text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{product.description}</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
        >
          <span className="material-icons">add_shopping_cart</span> Add to Order
        </button>
      </div>
    </div>
  );
}

