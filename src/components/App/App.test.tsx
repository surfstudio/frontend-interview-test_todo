import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../src/store/store';
import App from './App';

test('renders "ToDo List" title', () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.getByText(/ToDo List/i)).toBeInTheDocument();
});
