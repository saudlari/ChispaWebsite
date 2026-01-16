import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import FooterSection from './FooterSection';

export default function FooterLinks() {
  return (
    <FooterSection title="Enlaces Rápidos">
      <ul className="space-y-3">
        <li>
          <Link 
            to={ROUTES.menu}
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
          >
            <span className="material-icons text-base">restaurant_menu</span>
            Nuestro Menú
          </Link>
        </li>
        <li>
          <Link 
            to="/order"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
          >
            <span className="material-icons text-base">shopping_cart</span>
            Hacer Pedido
          </Link>
        </li>
        <li>
          <a 
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm" 
            href="#locations"
          >
            <span className="material-icons text-base">location_on</span>
            Ubicación
          </a>
        </li>
      </ul>
    </FooterSection>
  );
}

