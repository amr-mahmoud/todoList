import React from 'react';
import Routes from './routes/Routes';
import { Header, Footer, Body } from './components/UI';
import { AppWrapper } from './App.style';
const App = () => {
	return (
		<AppWrapper>
			<Header />
			<Body>
				<Routes />
			</Body>
			<Footer />
		</AppWrapper>
	);
};

export default App;
