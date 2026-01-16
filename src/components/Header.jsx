import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300" style={{
      backgroundColor: 'var(--header-bg)',
      borderColor: 'var(--header-border)'
    }}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-display text-2xl tracking-wider text-primary hidden md:block">
            EL CHISPA EXPRESS
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <a className="hover:text-primary transition-colors" href="#menu">
            Menu
          </a>
          <button
            className="p-2 rounded-full transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--button-bg)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--button-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--button-bg)'}
            onClick={toggleTheme}
            id="theme-toggle"
            type="button"
            aria-label="Toggle dark mode"
          >
            <span className="material-icons text-xl align-middle theme-icon-light" style={{ display: 'block' }}>
              dark_mode
            </span>
            <span className="material-icons text-xl align-middle theme-icon-dark text-secondary" style={{ display: 'none' }}>
              light_mode
            </span>
          </button>
          <Link
            to="/order"
            className="bg-accent text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
          >
            ¡Pide Ahora!
          </Link>
        </nav>
        <button className="md:hidden p-2">
          <span className="material-icons text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}

