import { Link } from 'react-router-dom';
import { ROUTES, APP_CONFIG } from '../../config/constants';
import ThemeToggle from './ThemeToggle';
import CartButton from './CartButton';

export default function MobileMenu({ isOpen, onClose, theme, onToggleTheme, itemCount, onCartClick }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="md:hidden fixed inset-0 top-20 z-30 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Menu Content */}
      <div 
        className="md:hidden fixed inset-x-0 top-20 z-40 transition-all duration-300 shadow-lg"
        style={{
          backgroundColor: 'var(--header-bg)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid var(--header-border)'
        }}
      >
        <nav 
          className="flex flex-col p-6 gap-4 font-semibold"
          role="navigation"
          aria-label="Navegación móvil"
        >
          <Link 
            to={ROUTES.home}
            onClick={onClose}
            className="font-display text-xl tracking-wider text-primary mb-2 pb-4 border-b"
            style={{ borderColor: 'var(--header-border)' }}
          >
            {APP_CONFIG.name.toUpperCase()}
          </Link>
          <Link 
            to={ROUTES.home}
            onClick={onClose}
            className="hover:text-primary transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Home
          </Link>
          <Link 
            to={ROUTES.menu}
            onClick={onClose}
            className="hover:text-primary transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Menu
          </Link>
          <Link
            to={ROUTES.order}
            onClick={onClose}
            className="bg-accent text-white px-6 py-3 rounded-full hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-center relative flex items-center justify-center gap-2"
            aria-label="Hacer un pedido"
          >
            <span className="material-icons">shopping_cart</span>
            <span>¡Pide Ahora!</span>
            {itemCount > 0 && (
              <span 
                className="absolute -top-1 -right-1 bg-white text-accent text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                aria-label={`${itemCount} items en el carrito`}
              >
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} variant="mobile" />
        </nav>
      </div>
    </>
  );
}

