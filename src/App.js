import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://api.pujakaitem.com/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<ProductsList products={products} />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      </>
  );
};

export default App;
