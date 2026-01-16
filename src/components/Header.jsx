import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../contexts/CartContext';
import { APP_CONFIG, ROUTES, ANCHORS } from '../config/constants';

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
        <nav className="hidden md:flex items-center gap-8 font-semibold" role="navigation" aria-label="Navegación principal">
          <Link 
            to={ROUTES.home} 
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Home
          </Link>
          <a 
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            href={ANCHORS.menu}
          >
            Menu
          </a>
          <button
            className="p-2 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{
              backgroundColor: 'var(--button-bg)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--button-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--button-bg)'}
            onClick={toggleTheme}
            id="theme-toggle"
            type="button"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-pressed={theme === 'dark'}
          >
            <span 
              className="material-icons text-xl align-middle theme-icon-light" 
              style={{ display: theme === 'light' ? 'block' : 'none' }}
              aria-hidden="true"
            >
              dark_mode
            </span>
            <span 
              className="material-icons text-xl align-middle theme-icon-dark text-secondary" 
              style={{ display: theme === 'dark' ? 'block' : 'none' }}
              aria-hidden="true"
            >
              light_mode
            </span>
          </button>
          <Link
            to={ROUTES.order}
            className="bg-accent text-white px-6 py-2 rounded-full hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Hacer un pedido"
          >
            ¡Pide Ahora!
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Link
            to={ROUTES.order}
            onClick={closeMobileMenu}
            className="relative p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Ver carrito"
          >
            <span className="material-icons text-3xl">shopping_cart</span>
            {itemCount > 0 && (
              <span 
                className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                aria-label={`${itemCount} items en el carrito`}
              >
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="md:hidden fixed inset-0 top-20 z-30 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
              className="font-display text-xl tracking-wider text-primary mb-2 pb-4 border-b"
              style={{ borderColor: 'var(--header-border)' }}
            >
              {APP_CONFIG.name.toUpperCase()}
            </Link>
            <Link 
              to={ROUTES.home}
              onClick={closeMobileMenu}
              className="hover:text-primary transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Home
            </Link>
            <a 
              className="hover:text-primary transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href={ANCHORS.menu}
              onClick={closeMobileMenu}
            >
              Menu
            </a>
            <Link
              to={ROUTES.order}
              onClick={closeMobileMenu}
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
            <button
              className="p-3 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
              style={{
                backgroundColor: 'var(--button-bg)'
              }}
              onClick={toggleTheme}
              id="theme-toggle-mobile"
              type="button"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-pressed={theme === 'dark'}
            >
              <span 
                className="material-icons text-xl align-middle theme-icon-light" 
                style={{ display: theme === 'light' ? 'block' : 'none' }}
                aria-hidden="true"
              >
                dark_mode
              </span>
              <span 
                className="material-icons text-xl align-middle theme-icon-dark text-secondary" 
                style={{ display: theme === 'dark' ? 'block' : 'none' }}
                aria-hidden="true"
              >
                light_mode
              </span>
              <span className="ml-2">
                {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
              </span>
            </button>
          </nav>
          </div>
        </>
      )}
    </header>
  );
}

