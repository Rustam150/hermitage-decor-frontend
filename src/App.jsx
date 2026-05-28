import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { ComparisonProvider } from './context/ComparisonContext';
import { CartProvider } from './context/CartContext';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import ComparisonPage from './pages/ComparisonPage';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import NewItemsPage from './pages/NewItemsPage';
import SalesPage from './pages/SalesPage';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <ComparisonProvider>
          <BrowserRouter>
            <div className="app">
              <Header />
              <Navigation />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/catalog" element={<CatalogPage />} />
                  <Route path="/catalog/:category" element={<CatalogPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/comparison" element={<ComparisonPage />} />
                  <Route path="/delivery" element={<DeliveryPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/new" element={<NewItemsPage />} />
                  <Route path="/sales" element={<SalesPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </ComparisonProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;