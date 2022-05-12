import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path='/detail' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
