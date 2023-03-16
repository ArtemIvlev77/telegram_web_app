import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {useTelegram} from './hooks/useTelegram';





function App() {
const {tg, safeUser, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
    return () => {
    };
  }, []);

  return (
    <div className="App">
    <Header/>
      <button onClick={onToggleButton}>toggle</button>
      <span>{JSON.stringify(safeUser, null, 2)}</span>
    </div>
  );
}

export default App;
