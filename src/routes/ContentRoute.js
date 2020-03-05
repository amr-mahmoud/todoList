import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompletedListContainer from '../components/BaseLayout/TasksComponents/CompletedListContainer';
import TasksListContianer from '../components/BaseLayout/TasksComponents/TasksListContainer';

const ContentRoute = () => (
	<Switch>
		<Route path="/completedList" component={CompletedListContainer} />
		<Route path="/" component={TasksListContianer} />
	</Switch>
);

export default ContentRoute;
