import React from 'react';
import './App.css';
declare global {
  interface Window { Telegram: any; }
}

window.Telegram = window.Telegram || {};




const tg = window.Telegram.WebApp

function App() {
  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      tg_webapp
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
