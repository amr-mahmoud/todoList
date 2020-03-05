import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { importAllCompletedTasks } from '../../../actions/tasksActions';
import { Pagination, Loader } from 'semantic-ui-react';
import TasksList from './components/TasksLists';
import { ListContainerWrapper, Loaderwrapper } from './ListContainer.style';

const CompletedListContainer = props => {
	const { tasksReducer } = props;
	const { completedTasks, completedTasksCount, pageSize } = tasksReducer;

	useEffect(() => {
		importAllCompletedTasks(0);
	}, []);
	const totalPages = Math.ceil(completedTasksCount / pageSize);

	const pageChangeHandler = (_e, data) => {
		const { activePage } = data;
		const skipItems = activePage === 1 ? 10 : (activePage - 1) * pageSize;
		importAllCompletedTasks(skipItems);
	};
	return completedTasks && completedTasks.length > 0 ? (
		<ListContainerWrapper>
			<TasksList tasksResults={completedTasks} limitedFunctionality={true}></TasksList>
			<Pagination
				defaultActivePage={1}
				onPageChange={(e, data) => pageChangeHandler(e, data)}
				totalPages={totalPages}
				siblingRange={3}
			/>
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

export default connect(mapStateToProps, { importAllCompletedTasks })(CompletedListContainer);
