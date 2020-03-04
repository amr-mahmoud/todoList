import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Visibility } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { importAllTasks, createTask, deleteTask, updateTask } from '../../../actions/tasksActions';
import { Loader } from 'semantic-ui-react';

import TasksList from './components/TasksLists';

const TasksListContainerWrapper = styled.div`
	background: #8080805c;
	width: 100%;
	padding: 100px;
	margin: 0 20px;
	height: fit-content;
	.ui.inverted.loader {
		position: fixed;
		top: 85%;
		font-size: 15px;
	}
`;

const TasksListContainer = props => {
	const { tasksReducer } = props;
	const { tasksResults } = tasksReducer;
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		importAllTasks(0);
		// const task = { title: 'NewTask1', description: 'syuhdysgdysg', completed: true };
		// createTask();
		// deleteTask('ck79ez9tqauee0b84u341zr53');
		// const task = {
		// 	id: 'ck77r3069hl4x0b2019dy3x43',
		// 	title: 'newYess',
		// 	completed: true,
		// 	description: 'describe yes ofcourse',
		// };
		// updateTask(task);
	}, []);

	useEffect(() => {
		setLoading(false);
	}, [tasksResults]);

	const VisibilityHandler = (_e, data) => {
		const { calculations } = data;
		const { bottomVisible, bottomPassed } = calculations;
		console.log(bottomVisible, bottomPassed);
		if (bottomVisible)
			if (!loading) {
				setLoading(true);
				importAllTasks(tasksResults.length);
			}
	};
	return (
		<TasksListContainerWrapper>
			<Loader inverted active={loading} content="Loading Items Please wait..." />
			<Visibility onUpdate={(e, calculations) => VisibilityHandler(e, calculations)}>
				<TasksList {...tasksReducer} />
			</Visibility>
		</TasksListContainerWrapper>
	);
};

const mapStateToProps = ({ tasksReducer }) => ({
	tasksReducer,
});

export default connect(mapStateToProps, { importAllTasks, createTask, deleteTask, updateTask })(TasksListContainer);
