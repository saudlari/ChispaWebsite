import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { getAllProductsForOrder } from '../data/products';

export default function Order() {
  const { cart, addToCart, removeFromCart, updateQuantity, getTotal } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const allProducts = getAllProductsForOrder();

  const generateWhatsAppMessage = () => {
    let message = `🍔 *PEDIDO - EL CHISPA EXPRESS*\n\n`;
    message += `*Cliente:* ${customerInfo.name || 'No especificado'}\n`;
    message += `*Teléfono:* ${customerInfo.phone || 'No especificado'}\n`;
    message += `*Dirección:* ${customerInfo.address || 'No especificada'}\n\n`;
    message += `*PEDIDO:*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    
    cart.forEach(item => {
      message += `• ${item.name} x${item.quantity} - $${Math.round(item.price * item.quantity)}\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: $${Math.round(getTotal())}*\n\n`;
    
    if (customerInfo.notes) {
      message += `*Notas:* ${customerInfo.notes}\n\n`;
    }
    
    message += `Gracias por tu pedido! 🎉`;
    
    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert('Por favor agrega productos a tu pedido');
      return;
    }
    
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor completa tu nombre y teléfono');
      return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/56936400558?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const groupedProducts = allProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <section className="py-20 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-4">HAZ TU PEDIDO</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Selecciona tus productos y envíalos por WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Productos */}
          <div className="lg:col-span-2">
            {Object.entries(groupedProducts).map(([category, products]) => (
              <div key={category} className="mb-12">
                <h3 className="font-display text-3xl mb-6 text-slate-700 dark:text-slate-100 transition-colors duration-300">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group dark-card rounded-2xl overflow-hidden shadow-lg border transition-all"
                      style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                    >
                      {product.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            src={product.image}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-secondary">${Math.round(product.price)}</span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-accent text-white px-4 py-2 rounded-xl hover:bg-green-800 transition-colors flex items-center gap-2"
                          >
                            <span className="material-icons text-sm">add</span>
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carrito y Formulario */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="dark-card rounded-2xl p-6 shadow-xl border mb-6" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                <h3 className="font-display text-2xl text-secondary mb-4">Tu Pedido</h3>
                
                {cart.length === 0 ? (
                  <p className="text-center transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                    Tu carrito está vacío
                  </p>
                ) : (
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 transition-colors duration-300">
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-slate-700 dark:text-slate-100 transition-colors duration-300">{item.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 transition-colors duration-300">
                            ${Math.round(item.price)} x {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold text-slate-700 dark:text-slate-100 transition-colors duration-300">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <span className="material-icons text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t pt-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Total:</span>
                    <span className="font-display text-2xl text-primary">${Math.round(getTotal())}</span>
                  </div>
                </div>

                {/* Formulario de Cliente */}
                <div className="space-y-4 mb-4">
                  <input
                    type="text"
                    placeholder="Tu nombre *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Tu teléfono *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300"
                  />
                  <select
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 transition-colors duration-300"
                  >
                    <option value="" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100">Selecciona tipo de entrega</option>
                    <option value="Recoger en el local" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100">Recoger en el local</option>
                    <option value="Entregar" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100">Entregar</option>
                  </select>
                  <textarea
                    placeholder="Notas adicionales (opcional)"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300"
                  />
                </div>

                <button
                  onClick={handleOrder}
                  disabled={cart.length === 0}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-icons">send</span>
                  Enviar Pedido por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

