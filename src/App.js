import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './layout';

// Pages
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductPage from './pages/ProductPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import Contact from './pages/Contact';
import RouteNotFound from './pages/RouteNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkoutPage" element={<CheckoutPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="checkoutSuccessPage" element={<CheckoutSuccessPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
    );
}

export default App;
