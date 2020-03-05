import React from 'react';
import styled from 'styled-components';
import TaskItem from './components/TaskItem';

const TasksListWrapper = styled.div``;
const TasksList = props => {
	const { tasksResults, updateTask } = props;
	return (
		<TasksListWrapper>
			{tasksResults && tasksResults.map(value => <TaskItem updateTask={updateTask} key={value.id} {...value} />)}
		</TasksListWrapper>
	);
};

export default TasksList;
