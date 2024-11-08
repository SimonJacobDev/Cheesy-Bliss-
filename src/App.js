import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza, variant, quantity) => {
    const newItem = {
      name: pizza.name,
      variant,
      quantity,
      price: pizza.prices[0][variant] * quantity,
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Homescreen addToCart={addToCart} />
    </div>
  );
}

export default App;
