import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products, Product } from './components/Product';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>eCommerce App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
