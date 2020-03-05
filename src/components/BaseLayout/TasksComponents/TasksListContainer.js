import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Loader, Visibility } from 'semantic-ui-react';
import { importAllTasks, createTask, deleteTask, updateTask } from '../../../actions/tasksActions';
import { ListContainerWrapper, Loaderwrapper, CircularButton } from './ListContainer.style';
import TaskItemModal from './components/components/components/TaskItemModal';
import TasksList from './components/TasksLists';
import { useMediaQuery } from 'react-responsive';

const TasksListContainer = props => {
	const { tasksReducer, updateTask } = props;
	const { tasksResults } = tasksReducer;
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

	const addOnClickHandler = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		importAllTasks(5, 0);
	}, []);

	useEffect(() => {
		setLoading(false);
	}, [tasksResults]);

	const VisibilityHandler = (_e, data) => {
		const { calculations } = data;
		const { bottomVisible } = calculations;
		if (bottomVisible)
			if (!loading) {
				setLoading(true);
				importAllTasks(5, tasksResults.length);
			}
	};
	return tasksResults && tasksResults.length > 0 ? (
		<ListContainerWrapper isTabletOrMobile={isTabletOrMobile}>
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
				<TasksList
					isTabletOrMobile={isTabletOrMobile}
					updateTask={updateTask}
					deleteTask={deleteTask}
					{...tasksReducer}
				/>
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
