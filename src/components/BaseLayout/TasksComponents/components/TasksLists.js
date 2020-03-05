import React from 'react';
import styled from 'styled-components';
import TaskItem from './components/TaskItem';

const TasksListWrapper = styled.div``;
const TasksList = props => {
	const {
		tasksResults,
		updateTask,
		deleteTask,
		limitedFunctionality,
		changeTaskToUncomplete,
		isTabletOrMobile,
	} = props;
	console.log(isTabletOrMobile);
	return (
		<TasksListWrapper>
			{tasksResults &&
				tasksResults.map(value => (
					<TaskItem
						isTabletOrMobile={isTabletOrMobile}
						changeTaskToUncomplete={changeTaskToUncomplete}
						limitedFunctionality={limitedFunctionality}
						updateTask={updateTask}
						deleteTask={deleteTask}
						key={value.id}
						{...value}
					/>
				))}
		</TasksListWrapper>
	);
};

export default TasksList;
