import React from 'react';
import Header from './components/Header';
import app from './assets/styles/App.module.scss';

function App() {
  return (
    <div className={app.App}>
      <Header />
    </div>
  )
}

export default App
