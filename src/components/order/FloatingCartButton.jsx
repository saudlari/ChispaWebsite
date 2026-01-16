import { formatPrice } from '../../utils/format';

export default function FloatingCartButton({ cartLength, total, onClick }) {
  return (
    <div className="fixed bottom-6 right-24 z-[60] flex flex-col items-end gap-2">
      {cartLength > 0 && (
        <div className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
          {formatPrice(total)}
        </div>
      )}
      <button
        onClick={onClick}
        className="bg-accent text-white rounded-full p-4 shadow-2xl hover:bg-green-800 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2 relative"
        aria-label="Ver carrito"
      >
        <span className="material-icons text-3xl">shopping_cart</span>
        {cartLength > 0 && (
          <span 
            className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            aria-label={`${cartLength} items en el carrito`}
          >
            {cartLength > 99 ? '99+' : cartLength}
          </span>
        )}
      </button>
    </div>
  );
}

