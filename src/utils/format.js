    export function formatPrice(price) {
  if (typeof price !== 'number' || isNaN(price)) {
    return '$0';
  }
  
  return `$${Math.round(price).toLocaleString('es-CL')}`;
}

export function roundPrice(price) {
  if (typeof price !== 'number' || isNaN(price)) {
    return 0;
  }
  
  return Math.round(price);
}

export function cleanPhone(phone) {
  if (!phone) {
    return '';
  }
  
  return phone.replace(/[\s\-\(\)]/g, '');
}

