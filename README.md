# El Chispa Express - Website

Modern and optimized website for El Chispa Express, a fast food application with WhatsApp ordering system.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablets, and desktop
- **Dark Mode**: Full support for light/dark theme
- **Shopping Cart**: Order management with localStorage persistence
- **WhatsApp Orders**: Direct integration with WhatsApp for order submission
- **Production Optimized**: Code splitting, lazy loading, and performance optimizations
- **Accessibility**: Complies with WCAG standards for better user experience
- **SEO Optimized**: Meta tags, Open Graph, and semantic structure

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **DaisyUI** - UI components
- **React Router** - Routing

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_WHATSAPP_NUMBER=56936400558
VITE_APP_URL=https://elchispaexpress.cl
VITE_DEV_MODE=false
```

### Production Configuration

1. **Update constants**: Review `src/config/constants.js` to adjust values according to your business
2. **Configure WhatsApp**: Update `VITE_WHATSAPP_NUMBER` in `.env` with your WhatsApp number
3. **Optimize images**: Consider using a CDN or image optimization service for Google Photos URLs

## 🏗️ Project Structure

```
src/
├── components/       # Reusable components
│   ├── ErrorBoundary.jsx
│   ├── Toast.jsx
│   └── ...
├── config/          # Configuration and constants
│   └── constants.js
├── contexts/        # React contexts
│   └── CartContext.jsx
├── data/            # Static data
│   └── products.js
├── hooks/           # Custom hooks
│   ├── useTheme.js
│   └── useToast.js
├── pages/           # Main pages
│   ├── Home.jsx
│   └── OrderPage.jsx
└── utils/           # Utilities
    ├── format.js
    ├── validation.js
    └── whatsapp.js
```

## 🚢 Deployment

### Production Build

```bash
npm run build
```

The build will be generated in the `dist/` folder ready to deploy.

### Deployment Options

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag the `dist/` folder or connect the repository
- **GitHub Pages**: Use GitHub Actions to deploy automatically
- **Own server**: Upload the `dist/` folder to your web server

### Environment Variables in Production

Make sure to configure environment variables in your deployment platform:

- `VITE_WHATSAPP_NUMBER`: WhatsApp number for orders
- `VITE_APP_URL`: Base URL of your application

## 📝 Best Practices Implemented

- ✅ Robust form validation
- ✅ Error handling with Error Boundaries
- ✅ Performance optimization (memoization, lazy loading)
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ SEO optimized (meta tags, Open Graph)
- ✅ Clean and maintainable code
- ✅ Environment variables for configuration
- ✅ Centralized constants
- ✅ TypeScript-ready (prepared structure)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix errors automatically

## 📱 Cart Features

- localStorage persistence
- Quantity validation
- Automatic total calculation
- Individual item management
- Automatic cleanup of corrupted data

## 🎨 Customization

### Colors

Main colors are defined in `tailwind.config.js` and `src/index.css`:

- Primary: `#D32F2F` (Red)
- Secondary: `#FBC02D` (Yellow)
- Accent: `#1B5E20` (Green)

### Fonts

- Display: Bangers (titles)
- Sans: Poppins (general text)

## 🐛 Troubleshooting

### Cart doesn't persist

- Verify that localStorage is enabled in the browser
- Check the browser console for errors

### Images don't load

- Verify that Google Photos URLs are public
- Consider using an image optimization service

### Dark mode doesn't work

- Verify that Tailwind CSS is configured correctly
- Check the browser console for JavaScript errors

## 📄 License

MIT

## 👥 Contribution

This is a private project. For suggestions or improvements, contact the development team.

---

Developed with ❤️ for El Chispa Express
