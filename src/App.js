import React from 'react';
import Routes from './routes/Routes';

import { Header, Footer, Body } from './components/UI';

const App = () => {
	return (
		<div>
			<Header />
			<Body>
				<Routes />
			</Body>
			<Footer />
		</div>
	);
};

export default App;
