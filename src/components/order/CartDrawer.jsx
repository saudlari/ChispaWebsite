import CartContent from './CartContent';

export default function CartDrawer({
  isOpen,
  onClose,
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
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col md:max-w-md md:right-6 md:left-auto md:rounded-2xl md:bottom-6"
        style={{ 
          backgroundColor: 'var(--card-bg)',
          borderTop: '2px solid var(--border-color)',
          border: '2px solid var(--border-color)'
        }}
      >
        {/* Header del Drawer */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="font-display text-2xl text-secondary">Tu Pedido</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Cerrar carrito"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        {/* Contenido del Drawer */}
        <div className="overflow-y-auto flex-1 p-4">
          <div className="dark-card rounded-2xl p-6 shadow-xl border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <CartContent
              cart={cart}
              showProducts={showProducts}
              onToggleShowProducts={onToggleShowProducts}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
              getTotal={getTotal}
              customerInfo={customerInfo}
              formErrors={formErrors}
              onFieldChange={onFieldChange}
              onOrder={onOrder}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </>
  );
}

