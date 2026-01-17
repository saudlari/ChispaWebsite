import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { mapProductToCart } from '../utils/productMapper';
import { useToast } from '../hooks/useToast';
import { menuCategories } from '../config/menuConfig';
import Toast from './Toast';
import MenuHeader from './menu/MenuHeader';
import CategorySection from './menu/CategorySection';

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
      {showHeader && <MenuHeader />}

      <main className="max-w-7xl mx-auto px-4 py-12">
        {menuCategories.map((categoryConfig) => (
          <CategorySection
            key={categoryConfig.id}
            {...categoryConfig}
            expandedCategories={expandedCategories}
            onToggleCategory={toggleCategory}
            onAddToCart={handleAddToCart}
            gap={categoryConfig.gap || 'gap-8'}
          />
        ))}

        {/* Botón para ver menú completo */}
        {Object.values(expandedCategories).some(expanded => !expanded) && (
          <div className="text-center mt-16 mb-8">
            <button
              onClick={() => {
                expandAllCategories();
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
