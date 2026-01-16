import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../config/constants';

export default function CartButton({ itemCount, onCartClick, variant = 'desktop' }) {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem('openCartDrawer', 'true');
    window.dispatchEvent(new CustomEvent('openCartDrawer'));
    navigate(ROUTES.order);
    if (onCartClick) onCartClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors hover:opacity-80 ${variant === 'mobile' ? 'z-50' : ''}`}
      style={variant === 'mobile' ? { zIndex: 60 } : {}}
      aria-label="Ver carrito"
      type="button"
    >
      <span className={`material-icons ${variant === 'mobile' ? 'text-3xl' : 'text-2xl'}`}>shopping_cart</span>
      {itemCount > 0 && (
        <span 
          className={`absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full ${variant === 'mobile' ? 'w-5 h-5' : 'w-5 h-5'} flex items-center justify-center`}
          aria-label={`${itemCount} items en el carrito`}
        >
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
}

