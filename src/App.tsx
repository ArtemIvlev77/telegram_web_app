import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {useTelegram} from './hooks/useTelegram';





function App() {
const {tg, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
    return () => {
    };
  }, []);

  return (
    <div className="App">
    <Header/>
      ЭТО ПРИЛОЖЕНИЕ НА РЕАКТЕ БРАТАН
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
