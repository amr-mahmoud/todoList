import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CompletedListContainer from '../components/BaseLayout/TasksComponents/CompletedListContainer';
import TasksListContianer from '../components/BaseLayout/TasksComponents/TasksListContainer';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/completedList" component={CompletedListContainer} />
			<Route path="/" component={TasksListContianer} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
