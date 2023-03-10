import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import app from './assets/styles/App.module.scss';
import WishListPage from './pages/WishListPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={app.App}>
      <HeaderComponent />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='card/:id' element={<CardPage />} />
        <Route path='wishlist' element={<WishListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
