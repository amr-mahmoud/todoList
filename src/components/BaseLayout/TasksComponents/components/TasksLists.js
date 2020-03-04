import React from 'react';
import styled from 'styled-components';
import TaskItem from './components/TaskItem';

const TasksListWrapper = styled.div``;
const TasksList = props => {
	const { tasksResults } = props;
	console.log(props);
	return (
		<TasksListWrapper>
			{tasksResults.map(value => (
				<TaskItem key={value.id} {...value} />
			))}
		</TasksListWrapper>
	);
};

export default TasksList;
