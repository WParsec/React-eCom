import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './layout';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import RouteNotFound from './pages/RouteNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
    );
}

export default App;
