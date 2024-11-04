import React from 'react';
import pizzas from '../pizzadata';
import Pizza from '../components/Pizza';

function Homescreen({ addToCart }) {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.name}>
            <Pizza pizza={pizza} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homescreen;
