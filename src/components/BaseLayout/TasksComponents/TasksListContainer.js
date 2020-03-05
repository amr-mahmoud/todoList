import React, { useEffect, useState } from 'react';
import { Visibility } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { importAllTasks, createTask, deleteTask, updateTask } from '../../../actions/tasksActions';
import { ListContainerWrapper, Loaderwrapper } from './ListContainer.style';
import TasksList from './components/TasksLists';

const TasksListContainer = props => {
	const { tasksReducer, updateTask } = props;
	const { tasksResults } = tasksReducer;
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		importAllTasks(5, 0);
		// const task = { title: 'NewTask1', description: 'syuhdysgdysg', completed: true };
		// createTask();
		// deleteTask('ck79ez9tqauee0b84u341zr53');
		// const task = {
		// 	id: 'ck77vhf6q747s0b84l63v6ttm',
		// 	title: 'newYess',
		// 	completed: true,
		// 	description: 'describe yes ofcourse',
		// };
		// updateTask(task);
	}, []);

	useEffect(() => {
		console.log(tasksResults);
		// const task = { title: 'NewTask1', description: 'syuhdysgdysg', completed: true };
		// createTask();
		// deleteTask('ck79ez9tqauee0b84u341zr53');
		// const task = {
		// 	id: 'ck77vhf6q747s0b84l63v6ttm',
		// 	title: 'newYess',
		// 	completed: true,
		// 	description: 'describe yes ofcourse',
		// };
		// updateTask(task);
	});

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
				console.log(tasksResults.length);
				importAllTasks(5, tasksResults.length);
			}
	};
	return tasksResults && tasksResults.length > 0 ? (
		<ListContainerWrapper>
			<Loader inverted active={loading} content="Loading Items Please wait..." />
			<Visibility onUpdate={(e, calculations) => VisibilityHandler(e, calculations)}>
				<TasksList updateTask={updateTask} deleteTask={deleteTask} {...tasksReducer} />
			</Visibility>
		</ListContainerWrapper>
	) : (
		<Loaderwrapper>
			<Loader active={true} content="Waiting for New Tasks to Arrive" />
		</Loaderwrapper>
	);
};

const mapStateToProps = ({ tasksReducer }) => ({
	tasksReducer,
});

export default connect(mapStateToProps, { importAllTasks, createTask, deleteTask, updateTask })(TasksListContainer);
