import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {useTelegram} from './hooks/useTelegram';
import Table from './Components/Table/Table';





function App() {
const {tg, user, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
    return () => {
    };
  }, []);

  return (
    <div className="App">
    <Header/>
      {/*<button onClick={onToggleButton}>toggle</button>*/}
      <Table/>
    </div>
  );
}

export default App;
