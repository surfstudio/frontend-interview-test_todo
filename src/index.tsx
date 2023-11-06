/* VENDOR */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

/* APPLICATION */
import { store } from './store/store';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import './index.css';

reportWebVitals(console.log);

const container = document.getElementById('root');
if (container) {
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
