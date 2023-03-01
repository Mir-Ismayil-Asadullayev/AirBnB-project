import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import app from './assets/styles/App.module.scss';
import HomePage from './pages/HomePage';

function App() {
  console.log("render");
  return (
    <div className={app.App}>
      <HeaderComponent />
      <HomePage/>
      <FooterComponent/>
    </div>
  )
}

export default App
