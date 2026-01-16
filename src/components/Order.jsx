import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { getAllProductsForOrder } from '../data/products';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { validateCustomerInfo }  from '../utils/validation';
import { formatPrice } from '../utils/format';
import { ERRORS, APP_CONFIG } from '../config/constants';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';

export default function Order() {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotal } = useCart();
  const { toast, showToast, hideToast } = useToast();
  const location = useLocation();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Manejar apertura del drawer desde el header
  useEffect(() => {
    const handleOpenCartDrawer = () => {
      if (window.innerWidth < 1024) {
        // Pequeño delay para asegurar que el componente esté renderizado
        setTimeout(() => {
          setIsCartOpen(true);
        }, 100);
      }
    };

    // Escuchar evento personalizado
    window.addEventListener('openCartDrawer', handleOpenCartDrawer);

    // Verificar sessionStorage al montar o cuando cambia la ruta
    const checkSessionStorage = () => {
      const shouldOpenCart = sessionStorage.getItem('openCartDrawer');
      if (shouldOpenCart === 'true' && window.innerWidth < 1024) {
        setTimeout(() => {
          setIsCartOpen(true);
          sessionStorage.removeItem('openCartDrawer');
        }, 150);
      }
    };

    // Verificar inmediatamente y cuando cambia la ruta
    checkSessionStorage();
    if (location.pathname === '/order') {
      checkSessionStorage();
    }

    return () => {
      window.removeEventListener('openCartDrawer', handleOpenCartDrawer);
    };
  }, [location.pathname]);

  const allProducts = useMemo(() => getAllProductsForOrder(), []);

  const groupedProducts = useMemo(() => {
    return allProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  }, [allProducts]);

  const handleFieldChange = useCallback((field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [formErrors]);

  const handleOrder = useCallback(() => {
    if (cart.length === 0) {
      showToast(ERRORS.cart.empty, 'error');
      return;
    }

    const validation = validateCustomerInfo(customerInfo);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      showToast('Por favor corrige los errores en el formulario', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const whatsappUrl = generateWhatsAppUrl(cart, customerInfo, getTotal());
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      showToast('Pedido enviado exitosamente', 'success');
      
      // Cerrar el drawer en mobile después de enviar
      setIsCartOpen(false);
      
      setTimeout(() => {
        setCustomerInfo({ name: '', phone: '', address: '', notes: '' });
        setFormErrors({});
      }, 1000);
    } catch (error) {
      showToast(ERRORS.general.unknown, 'error');
      if (import.meta.env.DEV) {
        console.error('Error al generar URL de WhatsApp:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [cart, customerInfo, getTotal, showToast]);

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
    showToast('Producto agregado al carrito', 'success');
    // Abrir el drawer en mobile cuando se agrega un producto
    if (window.innerWidth < 1024) {
      setIsCartOpen(true);
    }
  }, [addToCart, showToast]);

  const handleRemoveFromCart = useCallback((productId) => {
    removeFromCart(productId);
    showToast('Producto eliminado del carrito', 'info');
  }, [removeFromCart, showToast]);

  // Función para renderizar el contenido del carrito (reutilizable)
  const renderCartContent = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-secondary">Tu Pedido</h2>
        {showProducts && (
          <button
            onClick={() => setShowProducts(false)}
            className="hidden lg:flex text-slate-500 hover:text-primary transition-colors items-center gap-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-1"
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
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Reducir cantidad de ${item.name}`}
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-slate-700 dark:text-slate-100 transition-colors duration-300" aria-label={`Cantidad: ${item.quantity}`}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Aumentar cantidad de ${item.name}`}
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
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

      {/* Formulario de Cliente */}
      <form className="space-y-4 mb-4" onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
        <div>
          <label htmlFor="customer-name" className="sr-only">Nombre</label>
          <input
            id="customer-name"
            type="text"
            placeholder="Tu nombre *"
            value={customerInfo.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
              formErrors.name 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
            }`}
            aria-invalid={!!formErrors.name}
            aria-describedby={formErrors.name ? 'name-error' : undefined}
            required
          />
          {formErrors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {formErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="customer-phone" className="sr-only">Teléfono</label>
          <input
            id="customer-phone"
            type="tel"
            placeholder="Tu teléfono *"
            value={customerInfo.phone}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
              formErrors.phone 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
            }`}
            aria-invalid={!!formErrors.phone}
            aria-describedby={formErrors.phone ? 'phone-error' : undefined}
            required
          />
          {formErrors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
              {formErrors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="delivery-type" className="sr-only">Tipo de entrega</label>
          <select
            id="delivery-type"
            value={customerInfo.address}
            onChange={(e) => handleFieldChange('address', e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {APP_CONFIG.delivery.options.map((option) => (
              <option key={option.value} value={option.value} className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100">
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="customer-notes" className="sr-only">Notas adicionales</label>
          <textarea
            id="customer-notes"
            placeholder="Notas adicionales (opcional)"
            value={customerInfo.notes}
            onChange={(e) => handleFieldChange('notes', e.target.value)}
            rows="3"
            maxLength={APP_CONFIG.validation.maxNotesLength}
            className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
              formErrors.notes 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
            }`}
            aria-invalid={!!formErrors.notes}
            aria-describedby={formErrors.notes ? 'notes-error' : undefined}
          />
          {formErrors.notes && (
            <p id="notes-error" className="mt-1 text-sm text-red-500" role="alert">
              {formErrors.notes}
            </p>
          )}
          <p className="mt-1 text-xs text-slate-500" aria-live="polite">
            {customerInfo.notes.length} / {APP_CONFIG.validation.maxNotesLength} caracteres
          </p>
        </div>
      </form>

      <button
        onClick={handleOrder}
        disabled={cart.length === 0 || isSubmitting}
        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Enviar pedido por WhatsApp"
      >
        <span className="material-icons" aria-hidden="true">send</span>
        {isSubmitting ? 'Enviando...' : 'Enviar Pedido por WhatsApp'}
      </button>
    </>
  );

  return (
    <>
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">HAZ TU PEDIDO</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300">
              Selecciona tus productos y envíalos por WhatsApp
            </p>
          </div>

          {/* Botón para mostrar productos si están ocultos */}
          {!showProducts && (
            <div className="mb-6 text-center">
              <button
                onClick={() => setShowProducts(true)}
                className="bg-accent text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors flex items-center gap-2 mx-auto font-semibold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Ver productos disponibles"
              >
                <span className="material-icons">restaurant_menu</span>
                Ver productos disponibles
              </button>
            </div>
          )}

          <div className={`grid grid-cols-1 ${showProducts ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8`}>
            {/* Productos */}
            {showProducts && (
              <div className="lg:col-span-2 text-primary">
                {Object.entries(groupedProducts).map(([category, products]) => (
                  <div key={category} className="mb-12">
                    <h2 className="font-display text-3xl mb-6 text-primary">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products.map((product) => (
                        <article
                          key={product.id}
                          className="group dark-card rounded-2xl overflow-hidden shadow-lg border transition-all hover:shadow-xl"
                          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                        >
                          {product.image && (
                            <div className="relative h-48 overflow-hidden">
                              <img
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                src={product.image}
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                              {product.name}
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-secondary" aria-label={`Precio: ${formatPrice(product.price)}`}>
                                {formatPrice(product.price)}
                              </span>
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-accent text-white px-4 py-2 rounded-xl hover:bg-green-800 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                aria-label={`Agregar ${product.name} al carrito`}
                              >
                                <span className="material-icons text-sm" aria-hidden="true">add</span>
                                Agregar
                              </button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Carrito y Formulario - Desktop Sidebar */}
            <aside className={`${showProducts ? 'lg:col-span-1' : 'lg:col-span-1 max-w-2xl mx-auto w-full'} hidden lg:block`}>
              <div className="sticky top-24">
                <div className="dark-card rounded-2xl p-6 shadow-xl border mb-6" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                  {renderCartContent()}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Botón Flotante del Carrito - Mobile */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-accent text-white rounded-full p-4 shadow-2xl hover:bg-green-800 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2"
        aria-label="Ver carrito"
      >
        <div className="relative">
          <span className="material-icons text-3xl">shopping_cart</span>
          {cart.length > 0 && (
            <span 
              className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              aria-label={`${cart.length} items en el carrito`}
            >
              {cart.length > 99 ? '99+' : cart.length}
            </span>
          )}
        </div>
        {cart.length > 0 && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
            {formatPrice(getTotal())}
          </div>
        )}
      </button>

      {/* Drawer del Carrito - Mobile */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div 
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              borderTop: '2px solid var(--border-color)'
            }}
          >
            {/* Header del Drawer */}
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <h2 className="font-display text-2xl text-secondary">Tu Pedido</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Cerrar carrito"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            {/* Contenido del Drawer */}
            <div className="overflow-y-auto flex-1 p-4">
              <div className="dark-card rounded-2xl p-6 shadow-xl border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                {renderCartContent()}
              </div>
            </div>
          </div>
        </>
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}

