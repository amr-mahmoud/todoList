import React from 'react';
import styled from 'styled-components';
import TaskItem from './components/TaskItem';

const TasksListWrapper = styled.div``;
const TasksList = props => {
	const { tasksResults, updateTask, deleteTask, limitedFunctionality, changeTaskToUncomplete } = props;
	return (
		<TasksListWrapper>
			{tasksResults &&
				tasksResults.map(value => (
					<TaskItem
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
