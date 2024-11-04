import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

function MainApp() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza, variant, quantity) => {
    const item = {
      ...pizza,
      variant,
      quantity: Number(quantity),
    };
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Homescreen addToCart={addToCart} />
    </div>
  );
}

export default MainApp;
