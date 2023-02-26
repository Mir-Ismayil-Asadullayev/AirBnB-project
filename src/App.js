import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import app from './assets/styles/App.module.scss';

function App() {
  console.log("render");
  return (
    <div className={app.App}>
      <Header />
      <Footer/>
    </div>
  )
}

export default App
