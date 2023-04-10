import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {useTelegram} from './hooks/useTelegram';
import Chart from './components/Chart/Chart';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DealsList from './components/Orders/Orders';
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
		<main className="App bg-tg-secondary-bg h-screen text-tg-text text-sm">
			<Header/>
			<Routes>
				<Route index element={<Chart tripsPage={true}/>}/>
				<Route path="/orders/:tripId" element={<DealsList/>}/>
				<Route path="/races/:id" element={<Races/>}/>
			</Routes>
			<Footer/>
		</main>
	);
}

export default App;
