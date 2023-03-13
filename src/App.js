import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import app from './assets/styles/App.module.scss';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className={app.App}>
      <HeaderComponent />
      <AnimatedRoutes />
      <FooterComponent />
    </div>
  )
}

export default App
