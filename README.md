# El Chispa Express - Sitio Web

Sitio web moderno y optimizado para El Chispa Express, una aplicación de comida rápida con sistema de pedidos por WhatsApp.

## 🚀 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Modo Oscuro**: Soporte completo para tema claro/oscuro
- **Carrito de Compras**: Gestión de pedidos con persistencia en localStorage
- **Pedidos por WhatsApp**: Integración directa con WhatsApp para envío de pedidos
- **Optimizado para Producción**: Code splitting, lazy loading, y optimizaciones de rendimiento
- **Accesibilidad**: Cumple con estándares WCAG para mejor experiencia de usuario
- **SEO Optimizado**: Meta tags, Open Graph, y estructura semántica

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework de estilos
- **DaisyUI** - Componentes de UI
- **React Router** - Enrutamiento

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_WHATSAPP_NUMBER=56936400558
VITE_APP_URL=https://elchispaexpress.cl
VITE_DEV_MODE=false
```

### Configuración de Producción

1. **Actualizar constantes**: Revisa `src/config/constants.js` para ajustar valores según tu negocio
2. **Configurar WhatsApp**: Actualiza `VITE_WHATSAPP_NUMBER` en `.env` con tu número de WhatsApp
3. **Optimizar imágenes**: Considera usar un CDN o servicio de optimización de imágenes para las URLs de Google Photos

## 🏗️ Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── ErrorBoundary.jsx
│   ├── Toast.jsx
│   └── ...
├── config/          # Configuración y constantes
│   └── constants.js
├── contexts/        # Contextos de React
│   └── CartContext.jsx
├── data/            # Datos estáticos
│   └── products.js
├── hooks/           # Hooks personalizados
│   ├── useTheme.js
│   └── useToast.js
├── pages/           # Páginas principales
│   ├── Home.jsx
│   └── OrderPage.jsx
└── utils/           # Utilidades
    ├── format.js
    ├── validation.js
    └── whatsapp.js
```

## 🚢 Despliegue

### Build de Producción

```bash
npm run build
```

El build se generará en la carpeta `dist/` lista para desplegar.

### Opciones de Despliegue

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist/` o conecta el repositorio
- **GitHub Pages**: Usa GitHub Actions para desplegar automáticamente
- **Servidor propio**: Sube la carpeta `dist/` a tu servidor web

### Variables de Entorno en Producción

Asegúrate de configurar las variables de entorno en tu plataforma de despliegue:

- `VITE_WHATSAPP_NUMBER`: Número de WhatsApp para pedidos
- `VITE_APP_URL`: URL base de tu aplicación

## 📝 Mejores Prácticas Implementadas

- ✅ Validación de formularios robusta
- ✅ Manejo de errores con Error Boundaries
- ✅ Optimización de rendimiento (memoización, lazy loading)
- ✅ Accesibilidad (ARIA labels, navegación por teclado)
- ✅ SEO optimizado (meta tags, Open Graph)
- ✅ Código limpio y mantenible
- ✅ Variables de entorno para configuración
- ✅ Constantes centralizadas
- ✅ TypeScript-ready (estructura preparada)

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Ejecuta ESLint y corrige errores automáticamente

## 📱 Características del Carrito

- Persistencia en localStorage
- Validación de cantidades
- Cálculo automático de totales
- Gestión de items individuales
- Limpieza de datos corruptos automática

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js` y `src/index.css`:

- Primary: `#D32F2F` (Rojo)
- Secondary: `#FBC02D` (Amarillo)
- Accent: `#1B5E20` (Verde)

### Fuentes

- Display: Bangers (títulos)
- Sans: Poppins (texto general)

## 🐛 Solución de Problemas

### El carrito no persiste

- Verifica que localStorage esté habilitado en el navegador
- Revisa la consola del navegador para errores

### Las imágenes no cargan

- Verifica que las URLs de Google Photos sean públicas
- Considera usar un servicio de optimización de imágenes

### El tema oscuro no funciona

- Verifica que Tailwind CSS esté configurado correctamente
- Revisa la consola del navegador para errores de JavaScript

## 📄 Licencia

MIT

## 👥 Contribución

Este es un proyecto privado. Para sugerencias o mejoras, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ para El Chispa Express
