import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import ThemeToggle from './ThemeToggle';
import CartButton from './CartButton';

export default function Navigation({ theme, onToggleTheme, itemCount, onCartClick }) {
  return (
    <nav className="hidden md:flex items-center gap-6 font-semibold" role="navigation" aria-label="Navegación principal">
      <Link 
        to={ROUTES.home} 
        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
      >
        Home
      </Link>
      <Link 
        to={ROUTES.menu}
        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
      >
        Menu
      </Link>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      <CartButton itemCount={itemCount} onCartClick={onCartClick} />
      <Link
        to={ROUTES.order}
        className="bg-accent text-white px-6 py-2 rounded-full hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label="Hacer un pedido"
      >
        ¡Pide Ahora!
      </Link>
    </nav>
  );
}

