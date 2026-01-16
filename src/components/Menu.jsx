import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { hotDogs, burgers, sandwiches, chorrillanas, sides, drinks, breakfasts, kidsMenu } from '../data/products';
import { mapProductToCart } from '../utils/productMapper';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';

export default function Menu({ showHeader = true, compactMode = false }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast, showToast, hideToast } = useToast();
  const [expandedCategories, setExpandedCategories] = useState({
    hotDogs: false,
    burgers: false,
    sides: false,
    sandwiches: false,
    chorrillanas: false,
    breakfasts: false,
    kidsMenu: false,
    drinks: false,
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const expandAllCategories = () => {
    setExpandedCategories({
      hotDogs: true,
      burgers: true,
      sides: true,
      sandwiches: true,
      chorrillanas: true,
      breakfasts: true,
      kidsMenu: true,
      drinks: true,
    });
  };

  const handleAddToCart = (product, category) => {
    const cartProduct = mapProductToCart(product, category);
    addToCart(cartProduct);
    // Solo mostrar toast si no está en modo compacto (Order maneja sus propios toasts)
    if (!compactMode) {
      showToast('Producto agregado al carrito. Toca para ver tu pedido', 'success');
    }
  };

  const handleToastClick = () => {
    navigate('/order');
  };

  return (
    <section className={`${compactMode ? 'py-8' : 'py-20'} transition-colors duration-300`} style={{ 
      background: compactMode ? 'transparent' : 'linear-gradient(to bottom, var(--features-bg), var(--bg-primary))'
    }}>
      {showHeader && (
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
      )}

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="menu-category-anchor pt-8" id="hot-dogs">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">hot_tub</span> Completos
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(expandedCategories.hotDogs ? hotDogs : hotDogs.slice(0, 3)).map((item) => (
              <div
                key={item.id}
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
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.priceDisplay}
                  </div>
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-tighter">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item, 'Completos')}
                    className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.hotDogs && hotDogs.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('hotDogs')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todos los Completos ({hotDogs.length - 3} más)
              </button>
            </div>
          )}
        </div>

        {/* Burgers Section */}
        <div className="menu-category-anchor mt-20" id="burgers">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">lunch_dining</span> BURGERS
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(expandedCategories.burgers ? burgers : burgers.slice(0, 2)).map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-2xl font-bold text-accent">{item.priceDisplay}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{item.description}</p>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item, 'Burgers')}
                    className="w-full bg-accent text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-colors"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.burgers && burgers.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('burgers')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todas las Burgers ({burgers.length - 2} más)
              </button>
            </div>
          )}
        </div>

        {/* Fries & Sides Section */}
        <div className="menu-category-anchor mt-20" id="fries">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">restaurant</span> FRITAS & SIDES
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(expandedCategories.sides ? sides : sides.slice(0, 4)).map((item) => (
              <div
                key={item.id}
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
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-100 group-hover:text-primary transition-colors">{item.name}</h4>
                  <span className="text-primary font-bold">{item.priceDisplay}</span>
                </div>
                <p className="text-xs mb-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                <button 
                  onClick={() => handleAddToCart(item, 'Sides')}
                  className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="material-icons">add_shopping_cart</span> Add to Order
                </button>
              </div>
            ))}
          </div>
          {!expandedCategories.sides && sides.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('sides')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todos los Sides ({sides.length - 4} más)
              </button>
            </div>
          )}
        </div>

        {/* Sandwiches Section */}
        <div className="menu-category-anchor mt-20" id="sandwiches">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">lunch_dining</span> SANDWICHES
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(expandedCategories.sandwiches ? sandwiches : sandwiches.slice(0, 3)).map((item) => (
              <div
                key={item.id}
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
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.priceDisplay}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item, 'Sandwiches')}
                    className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.sandwiches && sandwiches.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('sandwiches')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todos los Sandwiches ({sandwiches.length - 3} más)
              </button>
            </div>
          )}
        </div>

        {/* Chorrillanas Section */}
        <div className="menu-category-anchor mt-20" id="chorrillanas">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">dinner_dining</span> CHORRILLANAS
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(expandedCategories.chorrillanas ? chorrillanas : chorrillanas.slice(0, 2)).map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-2xl font-bold text-accent">{item.priceDisplay}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{item.description}</p>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item, 'Chorrillanas')}
                    className="w-full bg-accent text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-colors"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.chorrillanas && chorrillanas.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('chorrillanas')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todas las Chorrillanas ({chorrillanas.length - 2} más)
              </button>
            </div>
          )}
        </div>

        {/* Breakfasts Section */}
        <div className="menu-category-anchor mt-20" id="breakfasts">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">breakfast_dining</span> DESAYUNOS
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(expandedCategories.breakfasts ? breakfasts : breakfasts.slice(0, 3)).map((item) => (
              <div
                key={item.id}
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
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.priceDisplay}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item, 'Desayunos')}
                    className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.breakfasts && breakfasts.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('breakfasts')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todos los Desayunos ({breakfasts.length - 3} más)
              </button>
            </div>
          )}
        </div>

        {/* Kids Menu Section */}
        <div className="menu-category-anchor mt-20" id="kids-menu">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">child_care</span> MENÚ KIDS
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(expandedCategories.kidsMenu ? kidsMenu : kidsMenu.slice(0, 3)).map((item) => (
              <div
                key={item.id}
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
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.priceDisplay}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item, 'Menú Kids')}
                    className="w-full bg-secondary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="material-icons">add_shopping_cart</span> Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
          {!expandedCategories.kidsMenu && kidsMenu.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('kidsMenu')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todo el Menú Kids ({kidsMenu.length - 3} más)
              </button>
            </div>
          )}
        </div>

        {/* Drinks Section */}
        <div className="menu-category-anchor mt-20" id="drinks">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
            <h2 className="font-display text-5xl text-primary flex items-center gap-3">
              <span className="material-icons text-4xl">local_drink</span> BEBIDAS
            </h2>
            <div className="h-1 flex-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(expandedCategories.drinks ? drinks : drinks.slice(0, 6)).map((item) => (
              <div 
                key={item.id} 
                className="text-center group cursor-pointer"
                onClick={() => handleAddToCart(item, 'Bebidas')}
              >
                <div className="w-20 h-20 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-2 group-hover:bg-secondary transition-colors">
                  <span className="material-icons text-4xl text-slate-400 group-hover:text-primary">{item.icon}</span>
                </div>
                <span className="block font-bold">{item.name}</span>
                <span className="text-primary">{item.priceDisplay}</span>
              </div>
            ))}
          </div>
          {!expandedCategories.drinks && drinks.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => toggleCategory('drinks')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="material-icons">expand_more</span>
                Ver todas las Bebidas ({drinks.length - 6} más)
              </button>
            </div>
          )}
        </div>

        {/* Botón para ver menú completo */}
        {Object.values(expandedCategories).some(expanded => !expanded) && (
          <div className="text-center mt-16 mb-8">
            <button
              onClick={() => {
                expandAllCategories();
                // Scroll suave hacia arriba después de expandir
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-xl"
            >
              <span className="material-icons text-2xl">restaurant_menu</span>
              Ver Menú Completo
              <span className="material-icons text-2xl">expand_more</span>
            </button>
          </div>
        )}
      </main>
      {!compactMode && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
          onClick={handleToastClick}
        />
      )}
    </section>
  );
}

