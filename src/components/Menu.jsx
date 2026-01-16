import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { hotDogs, burgers, sandwiches, chorrillanas, sides, drinks, breakfasts, kidsMenu } from '../data/products';
import { mapProductToCart } from '../utils/productMapper';
import { useToast } from '../hooks/useToast';
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

  const categories = [
    {
      id: 'hot-dogs',
      icon: 'hot_tub',
      title: 'Completos',
      products: hotDogs,
      category: 'Completos',
      categoryKey: 'hotDogs',
      layout: 'vertical',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      initialVisibleCount: 3,
    },
    {
      id: 'burgers',
      icon: 'lunch_dining',
      title: 'BURGERS',
      products: burgers,
      category: 'Burgers',
      categoryKey: 'burgers',
      layout: 'horizontal',
      gridCols: 'grid-cols-1 md:grid-cols-2',
      initialVisibleCount: 2,
    },
    {
      id: 'fries',
      icon: 'restaurant',
      title: 'FRITAS & SIDES',
      products: sides,
      category: 'Sides',
      categoryKey: 'sides',
      layout: 'compact',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      initialVisibleCount: 4,
      gap: 'gap-6',
    },
    {
      id: 'sandwiches',
      icon: 'lunch_dining',
      title: 'SANDWICHES',
      products: sandwiches,
      category: 'Sandwiches',
      categoryKey: 'sandwiches',
      layout: 'vertical',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      initialVisibleCount: 3,
    },
    {
      id: 'chorrillanas',
      icon: 'dinner_dining',
      title: 'CHORRILLANAS',
      products: chorrillanas,
      category: 'Chorrillanas',
      categoryKey: 'chorrillanas',
      layout: 'horizontal',
      gridCols: 'grid-cols-1 md:grid-cols-2',
      initialVisibleCount: 2,
    },
    {
      id: 'breakfasts',
      icon: 'breakfast_dining',
      title: 'DESAYUNOS',
      products: breakfasts,
      category: 'Desayunos',
      categoryKey: 'breakfasts',
      layout: 'vertical',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      initialVisibleCount: 3,
    },
    {
      id: 'kids-menu',
      icon: 'child_care',
      title: 'MENÚ KIDS',
      products: kidsMenu,
      category: 'Menú Kids',
      categoryKey: 'kidsMenu',
      layout: 'vertical',
      gridCols: 'grid-cols-1 md:grid-cols-3',
      initialVisibleCount: 3,
    },
    {
      id: 'drinks',
      icon: 'local_drink',
      title: 'BEBIDAS',
      products: drinks,
      category: 'Bebidas',
      categoryKey: 'drinks',
      layout: 'icon',
      gridCols: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
      initialVisibleCount: 6,
      gap: 'gap-4',
    },
  ];

  return (
    <section className={`${compactMode ? 'py-8' : 'py-20'} transition-colors duration-300`} style={{ 
      background: compactMode ? 'transparent' : 'linear-gradient(to bottom, var(--features-bg), var(--bg-primary))'
    }}>
      {showHeader && <MenuHeader />}

      <main className="max-w-7xl mx-auto px-4 py-12">
        {categories.map((categoryConfig) => (
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
