import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { APP_CONFIG, ROUTES, ANCHORS } from '../config/constants';

export default function Header() {
  const { toggleTheme, theme } = useTheme();

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
        <button 
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
        >
          <span className="material-icons text-3xl" aria-hidden="true">menu</span>
        </button>
      </div>
    </header>
  );
}

