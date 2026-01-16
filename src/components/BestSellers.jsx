import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { bestSellers as products, hotDogs, burgers, sandwiches, chorrillanas, sides, drinks, combos } from '../data/products';
import { mapProductToCart } from '../utils/productMapper';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';

export default function BestSellers() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast, showToast, hideToast } = useToast();

  const handleAddToCart = (product) => {
    let foundProduct = null;
    let category = 'Completos';
    
    foundProduct = hotDogs.find(p => p.name === product.name);
    if (foundProduct) {
      category = 'Completos';
    } else {
      foundProduct = burgers.find(p => p.name === product.name);
      if (foundProduct) {
        category = 'Burgers';
      } else {
        foundProduct = sandwiches.find(p => p.name === product.name);
        if (foundProduct) {
          category = 'Sandwiches';
        } else {
          foundProduct = chorrillanas.find(p => p.name === product.name);
          if (foundProduct) {
            category = 'Chorrillanas';
          } else {
            foundProduct = sides.find(p => p.name === product.name);
            if (foundProduct) {
              category = 'Sides';
            } else {
              foundProduct = drinks.find(p => p.name === product.name);
              if (foundProduct) {
                category = 'Bebidas';
              } else {
              foundProduct = combos.find(p => p.name === product.name);
              if (foundProduct) {
                  category = 'Combos';
                }
              }
            }
          }
        }
      }
    }
    
    if (foundProduct) {
      const cartProduct = mapProductToCart(foundProduct, category);
      addToCart(cartProduct);
      showToast('Producto agregado al carrito. Toca para ver tu pedido', 'success');
    }
  };

  const handleToastClick = () => {
    navigate('/order');
  };
  return (
    <section className="py-24 transition-colors duration-300" id="menu" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-5xl text-primary mb-4">LOS MÁS VENDIDOS</h2>
            <p className="max-w-xl text-lg transition-colors duration-300 text-slate-900" style={{ color: 'var(--text-muted)' }}>
              Nuestros favoritos de la casa. ¡Pruébalos y descubre por qué todos hablan de nosotros!
            </p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
            Ver todo el menú <span className="material-icons">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group dark-card rounded-3xl overflow-hidden shadow-lg border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={product.image}
                  loading="lazy"
                  decoding="async"
                />
                {product.badge && (
                  <div className={`absolute top-4 right-4 ${product.badgeColor} font-bold px-3 py-1 rounded-lg`}>
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-slate-100 group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-sm mb-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.priceDisplay}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-accent text-white p-3 rounded-xl hover:bg-green-800 transition-colors"
                  >
                    <span className="material-icons">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
        onClick={handleToastClick}
      />
    </section>
  );
}

