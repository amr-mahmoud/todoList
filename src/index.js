import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';

const theme = {
	primaryLayout: '#4a4848d6',
	secondaryBody: '#8080805c',
	secondary: '#8281818c',
	blueTheme: '#2285d0',
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
