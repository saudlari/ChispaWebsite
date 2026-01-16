import { formatPrice } from '../../utils/format';

export default function FloatingCartButton({ cartLength, total, onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed bottom-6 right-6 z-40 bg-accent text-white rounded-full p-4 shadow-2xl hover:bg-green-800 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2"
      aria-label="Ver carrito"
    >
      <div className="relative">
        <span className="material-icons text-3xl">shopping_cart</span>
        {cartLength > 0 && (
          <span 
            className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            aria-label={`${cartLength} items en el carrito`}
          >
            {cartLength > 99 ? '99+' : cartLength}
          </span>
        )}
      </div>
      {cartLength > 0 && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
          {formatPrice(total)}
        </div>
      )}
    </button>
  );
}

