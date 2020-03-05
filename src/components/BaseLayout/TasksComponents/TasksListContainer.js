import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Loader, Visibility } from 'semantic-ui-react';
import { importAllTasks, createTask, deleteTask, updateTask } from '../../../actions/tasksActions';
import { ListContainerWrapper, Loaderwrapper, CircularButton } from './ListContainer.style';
import TaskItemModal from './components/components/components/TaskItemModal';
import TasksList from './components/TasksLists';

const TasksListContainer = props => {
	const { tasksReducer, updateTask } = props;
	const { tasksResults } = tasksReducer;
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const addOnClickHandler = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		importAllTasks(5, 0);
		// const task = { title: 'NewTask1', description: 'syuhdysgdysg', completed: true };
		// createTask();
		// deleteTask('ck7db81y6sn980b20qnedgkfl');
		// const task = {
		// 	id: 'ck77vhf6q747s0b84l63v6ttm',
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
				console.log(tasksResults.length);
				importAllTasks(5, tasksResults.length);
			}
	};
	return tasksResults && tasksResults.length > 0 ? (
		<ListContainerWrapper>
			<TaskItemModal
				createTask={createTask}
				setShowModal={addOnClickHandler}
				open={showModal}
				updateTask={updateTask}
				mode="Create"
			/>
			<CircularButton onClick={() => addOnClickHandler()} circular icon="add" primary />
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
