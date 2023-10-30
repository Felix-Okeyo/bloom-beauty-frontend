import './App.css';
import React from 'react';
import Checkout from './components/Checkout';

function App() {
  const productA = {
    name: 'Product A',
    price: '100.00',
    sizes: ["XS", "S", "M", "L", "XL"],
    image: 'https://www.pexels.com/photo/colored-powders-and-brush-1749452/'
  };

  return (
    <div className="App">
      <Checkout product={productA} />
    </div>
  );
}

export default App;
