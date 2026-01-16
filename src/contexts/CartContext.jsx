import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { APP_CONFIG } from '../config/constants';
import { validateQuantity } from '../utils/validation';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(APP_CONFIG.localStorage.cartKey);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error loading cart from localStorage:', error);
      }
      localStorage.removeItem(APP_CONFIG.localStorage.cartKey);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(APP_CONFIG.localStorage.cartKey, JSON.stringify(cart));
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Error saving cart to localStorage:', error);
        }
      }
    }
  }, [cart, isLoading]);

  const addToCart = useCallback((product) => {
    if (!product || !product.id || typeof product.price !== 'number') {
      if (import.meta.env.DEV) {
        console.error('Invalid product:', product);
      }
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        const validation = validateQuantity(newQuantity);
        if (!validation.isValid) {
          return prevCart; // No agregar si excede el máximo
        }
        
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    const validation = validateQuantity(newQuantity);
    if (!validation.isValid && newQuantity > 0) {
      return; 
    }

    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      return total + itemTotal;
    }, 0);
  }, [cart]);

  const getItemCount = useCallback(() => {
    return cart.reduce((count, item) => count + (item.quantity || 0), 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount,
      isLoading,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

