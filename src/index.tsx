/* VENDOR */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

/* APPLICATION */
import { store } from './store/store';
import App from './components/App/App';
//import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import './index.css';

const container = document.getElementById('root');
if (container !== null) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
