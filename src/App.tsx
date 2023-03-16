import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {useTelegram} from './hooks/useTelegram';





function App() {
const {tg, safeUser, user, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
    return () => {
    };
  }, []);

  return (
    <div className="App">
    <Header/>
      <button onClick={onToggleButton}>toggle</button>
      <h6>safe user</h6>
      <span className='whitespace-pre-wrap'>{JSON.stringify(safeUser, null, 2)}</span>
      <h6>user</h6>
      <span className='whitespace-pre-wrap'>{JSON.stringify(user, null, 2)}</span>
    </div>
  );
}

export default App;
