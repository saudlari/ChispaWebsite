import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../contexts/CartContext';
import { APP_CONFIG, ROUTES } from '../config/constants';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';
import CartButton from './header/CartButton';

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const { getItemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = getItemCount();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300" 
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--header-border)'
      }}
      role="banner"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            to={ROUTES.home} 
            className="font-display text-2xl tracking-wider text-primary hidden md:block"
            aria-label="Ir a inicio"
          >
            {APP_CONFIG.name.toUpperCase()}
          </Link>
        </div>
        <Navigation 
          theme={theme} 
          onToggleTheme={toggleTheme} 
          itemCount={itemCount}
          onCartClick={closeMobileMenu}
        />
        <div className="md:hidden flex items-center gap-2">
          <CartButton 
            itemCount={itemCount} 
            variant="mobile"
            onCartClick={closeMobileMenu}
          />
          <button 
            className="p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded z-50 relative"
            aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            type="button"
          >
            <span 
              className="material-icons text-3xl transition-transform duration-300" 
              aria-hidden="true"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        theme={theme}
        onToggleTheme={toggleTheme}
        itemCount={itemCount}
        onCartClick={closeMobileMenu}
      />
    </header>
  );
}
