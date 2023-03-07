import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import app from './assets/styles/App.module.scss';
import WishListPage from './pages/WishListPage';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log("render");
  return (
    <div className={app.App}>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={ <CardPage />} />
        <Route path='/wishlist' element={ <WishListPage />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
