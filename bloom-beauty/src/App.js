import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Checkout from './components/Checkout'; 
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" component={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;



