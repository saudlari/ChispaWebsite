import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
