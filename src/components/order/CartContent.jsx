import { formatPrice } from '../../utils/format';
import CustomerForm from './CustomerForm';

export default function CartContent({
  cart,
  showProducts,
  onToggleShowProducts,
  onUpdateQuantity,
  onRemoveFromCart,
  getTotal,
  customerInfo,
  formErrors,
  onFieldChange,
  onOrder,
  isSubmitting,
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-secondary">Tu Pedido</h2>
        {showProducts && (
          <button
            onClick={() => onToggleShowProducts(false)}
            className="flex text-slate-500 hover:text-primary transition-colors items-center gap-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-1"
            aria-label="Ocultar productos para enfocarse en el pedido"
            title="Ocultar productos"
          >
            <span className="material-icons text-sm">visibility_off</span>
            Ocultar menú
          </button>
        )}
      </div>
      
      {cart.length === 0 ? (
        <p className="text-center transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
          Tu carrito está vacío
        </p>
      ) : (
        <div className="space-y-3 mb-4 max-h-96 overflow-y-auto" role="list" aria-label="Items del carrito">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 transition-colors duration-300" role="listitem">
              <div className="flex-1">
                <p className="font-semibold text-sm text-slate-700 dark:text-slate-100 transition-colors duration-300">{item.name}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  {formatPrice(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Reducir cantidad de ${item.name}`}
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-slate-700 dark:text-slate-100 transition-colors duration-300" aria-label={`Cantidad: ${item.quantity}`}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Aumentar cantidad de ${item.name}`}
                >
                  +
                </button>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                  aria-label={`Eliminar ${item.name} del carrito`}
                >
                  <span className="material-icons text-sm" aria-hidden="true">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t pt-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Total:</span>
          <span className="font-display text-2xl text-primary" aria-label={`Total: ${formatPrice(getTotal())}`}>
            {formatPrice(getTotal())}
          </span>
        </div>
      </div>

      <CustomerForm
        customerInfo={customerInfo}
        formErrors={formErrors}
        onFieldChange={onFieldChange}
        onOrder={onOrder}
        isSubmitting={isSubmitting}
        cartLength={cart.length}
      />
    </>
  );
}

