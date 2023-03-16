import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
declare global {
  interface Window { Telegram: any; }
}

window.Telegram = window.Telegram || {};





function App() {
  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready()
    return () => {
    };
  }, []);

  return (
    <div className="App">
    <Header/>
    </div>
  );
}

export default App;
