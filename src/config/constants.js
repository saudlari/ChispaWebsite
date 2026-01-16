export const APP_CONFIG = {
  name: 'El Chispa Express',
  tagline: 'Más Rápido, Más Rico',
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '56936400558',
    messageTemplate: {
      header: '🍔 *PEDIDO - EL CHISPA EXPRESS*\n\n',
      clientSection: {
        name: '*Cliente:*',
        phone: '*Teléfono:*',
        address: '*Dirección:*',
      },
      orderSection: {
        title: '*PEDIDO:*',
        separator: '━━━━━━━━━━━━━━━━━━━━',
      },
      total: '*TOTAL: $',
      notes: '*Notas:*',
      footer: '\nGracias por tu pedido! 🎉',
    },
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.534019971707!2d-70.31480022397565!3d-27.39026461332743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698053a13160a3d%3A0x7fc39194c39d8be3!2sEl%20Chispa%20Express!5e0!3m2!1spt-BR!2scl!4v1768528824598!5m2!1spt-BR!2scl',
    directUrl: 'https://maps.app.goo.gl/ez8SKdfYqAGbJuWQ6',
  },
  localStorage: {
    cartKey: 'chispaCart',
    themeKey: 'theme',
  },
  validation: {
    minNameLength: 2,
    maxNameLength: 100,
    minPhoneLength: 8,
    maxPhoneLength: 15,
    maxNotesLength: 500,
    maxQuantity: 99,
  },
  delivery: {
    options: [
      { value: '', label: 'Selecciona tipo de entrega' },
      { value: 'Recoger en el local', label: 'Recoger en el local' },
      { value: 'Entregar', label: 'Entregar' },
    ],
  },
  images: {
    hero: {
      desktop: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3',
      tablet: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3',
      mobile: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3',
      default: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Deliciosos hot dogs y comida rápida',
    },
  },
};

export const ROUTES = {
  home: '/',
  order: '/order',
};

export const ANCHORS = {
  menu: '#menu',
  locations: '#locations',
};

export const ERRORS = {
  cart: {
    empty: 'Por favor agrega productos a tu pedido',
    invalidProduct: 'Producto inválido',
    maxQuantity: 'La cantidad máxima es 99',
  },
  form: {
    nameRequired: 'Por favor completa tu nombre',
    phoneRequired: 'Por favor completa tu teléfono',
    nameTooShort: 'El nombre debe tener al menos 2 caracteres',
    nameTooLong: 'El nombre no puede exceder 100 caracteres',
    phoneInvalid: 'El teléfono debe tener entre 8 y 15 dígitos',
    notesTooLong: 'Las notas no pueden exceder 500 caracteres',
  },
  general: {
    loading: 'Error al cargar los datos',
    network: 'Error de conexión. Por favor intenta nuevamente',
    unknown: 'Ha ocurrido un error inesperado',
  },
};

export const SUCCESS = {
  orderSent: 'Pedido enviado exitosamente',
  cartCleared: 'Carrito vaciado',
  itemAdded: 'Producto agregado al carrito',
  itemRemoved: 'Producto eliminado del carrito',
};

