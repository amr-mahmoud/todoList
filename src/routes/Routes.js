import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout/BaseLayout';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={BaseLayout} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
