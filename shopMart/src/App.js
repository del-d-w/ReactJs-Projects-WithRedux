import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

export default function App() {
  const bodyStyle = {
    paddingTop: '56px', // Adjust this value based on your navbar height
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div style={bodyStyle}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
