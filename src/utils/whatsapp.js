import { APP_CONFIG } from '../config/constants';

export function generateWhatsAppMessage(cartItems, customerInfo, total) {
  const { messageTemplate } = APP_CONFIG.whatsapp;
  
  let message = messageTemplate.header;
  
  message += `${messageTemplate.clientSection.name} ${customerInfo.name || 'No especificado'}\n`;
  message += `${messageTemplate.clientSection.phone} ${customerInfo.phone || 'No especificado'}\n`;
  message += `${messageTemplate.clientSection.address} ${customerInfo.address || 'No especificada'}\n\n`;
  
  message += `${messageTemplate.orderSection.title}\n`;
  message += `${messageTemplate.orderSection.separator}\n`;
  
  cartItems.forEach(item => {
    const itemTotal = Math.round(item.price * item.quantity);
    message += `• ${item.name} x${item.quantity} - $${itemTotal}\n`;
  });
  
  message += `${messageTemplate.orderSection.separator}\n`;
  message += `${messageTemplate.total}${Math.round(total)}*\n\n`;
  
  if (customerInfo.notes && customerInfo.notes.trim()) {
    message += `${messageTemplate.notes} ${customerInfo.notes}\n\n`;
  }
  
  message += messageTemplate.footer;
  
  return encodeURIComponent(message);
}

export function generateWhatsAppUrl(cartItems, customerInfo, total) {
  const message = generateWhatsAppMessage(cartItems, customerInfo, total);
  const phoneNumber = APP_CONFIG.whatsapp.number;
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

