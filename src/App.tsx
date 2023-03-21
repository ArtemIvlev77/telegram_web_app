import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {useTelegram} from './hooks/useTelegram';
import Chart from './Components/Chart/Chart';
import {Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders';
import Races from './Components/Races/Races';

function App() {
	const {tg, user, onToggleButton} = useTelegram()
	useEffect(() => {
		tg.ready()
		return () => {
		};
	}, []);

	return (
		<div className="App bg-tg-primary-bg h-screen">
			<Header/>
			<Routes>
				<Route index element={<Chart/>}/>
				<Route path="/orders/:id" element={<Orders/>}/>
				<Route path="/races/:id" element={<Races/>}/>
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
