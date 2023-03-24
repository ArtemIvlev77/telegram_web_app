import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import AccountContextProvider from './shared/context/accountContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<AccountContextProvider>
				<App/>
			</AccountContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
