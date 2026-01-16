import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { validateCustomerInfo }  from '../utils/validation';
import { ERRORS } from '../config/constants';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';
import Menu from './Menu';
import CartDrawer from './order/CartDrawer';

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
  const prevCartLengthRef = useRef(cart.length);

  useEffect(() => {
    if (cart.length > prevCartLengthRef.current) {
      showToast('Producto agregado al carrito', 'success');
    }
    prevCartLengthRef.current = cart.length;
  }, [cart.length, showToast]);

  useEffect(() => {
    const handleOpenCartDrawer = () => {
      setIsCartOpen(true);
    };

    window.addEventListener('openCartDrawer', handleOpenCartDrawer);

    const checkSessionStorage = () => {
      const shouldOpenCart = sessionStorage.getItem('openCartDrawer');
      if (shouldOpenCart === 'true') {
        setIsCartOpen(true);
        sessionStorage.removeItem('openCartDrawer');
      }
    };

    if (location.pathname === '/order') {
      setTimeout(() => {
        checkSessionStorage();
      }, 100);
    }

    return () => {
      window.removeEventListener('openCartDrawer', handleOpenCartDrawer);
    };
  }, [location.pathname]);

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

  const handleRemoveFromCart = useCallback((productId) => {
    removeFromCart(productId);
    showToast('Producto eliminado del carrito', 'info');
  }, [removeFromCart, showToast]);

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

          <div className="grid grid-cols-1 gap-8">
            {/* Productos - Usando componente Menu */}
            {showProducts && (
              <div>
                <Menu showHeader={false} compactMode={true} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Drawer del Carrito - Siempre flotante */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        showProducts={showProducts}
        onToggleShowProducts={setShowProducts}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        getTotal={getTotal}
        customerInfo={customerInfo}
        formErrors={formErrors}
        onFieldChange={handleFieldChange}
        onOrder={handleOrder}
        isSubmitting={isSubmitting}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
