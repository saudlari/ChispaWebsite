import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p style={{ color: 'var(--text-muted)' }}>Cargando...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
