import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {useTelegram} from './hooks/useTelegram';
import Chart from './components/Chart/Chart';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Orders from './components/Orders/Orders';
import Races from './components/Races/Races';

function App() {
	const {tg, user, onToggleButton} = useTelegram()
	useEffect(() => {
		tg.ready()
		tg.expand()
		return () => {
		};
	}, []);

	return (
		<div className="App bg-tg-secondary-bg h-screen text-tg-text">
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
