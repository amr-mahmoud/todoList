import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { importAllCompletedTasks } from '../../../actions/tasksActions';
import { Pagination } from 'semantic-ui-react';

import TasksList from './components/TasksLists';

const CompletedListContainerWrapper = styled.div`
	background: #8080805c;
	width: 100%;
	padding: 25px;
	padding-bottom: 80px;
	margin: 0 20px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	.ui.pagination.menu {
		width: fit-content;
		margin: auto;
	}
`;
const CompletedListContainer = props => {
	const { tasksReducer } = props;
	const { completedTasks, completedTasksCount, pageSize } = tasksReducer;

	console.log('completedTasks', completedTasks);
	useEffect(() => {
		importAllCompletedTasks(0);
	}, []);
	const totalPages = Math.ceil(completedTasksCount / pageSize);
	console.log(totalPages);

	const pageChangeHandler = (_e, data) => {
		const { activePage } = data;
		const skipItems = activePage === 1 ? 10 : (activePage - 1) * pageSize;
		importAllCompletedTasks(skipItems);
	};
	return (
		<CompletedListContainerWrapper>
			<TasksList tasksResults={completedTasks}></TasksList>
			<Pagination
				defaultActivePage={1}
				onPageChange={(e, data) => pageChangeHandler(e, data)}
				totalPages={totalPages}
				siblingRange={3}
			/>
		</CompletedListContainerWrapper>
	);
};

const mapStateToProps = ({ tasksReducer }) => ({
	tasksReducer,
});

export default connect(mapStateToProps, { importAllCompletedTasks })(CompletedListContainer);
