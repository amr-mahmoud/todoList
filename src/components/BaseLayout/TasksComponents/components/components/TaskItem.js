import React, { useState } from 'react';
import moment from 'moment';
import { Checkbox } from 'semantic-ui-react';
import TaskItemModal from './components/TaskItemModal';
import {
	DeleteIcon,
	TaskItemBody,
	Title,
	TasksItemHeaderWWrapper,
	DueTimeWrapper,
	TasksItemWrapper,
	TaskItemDescription,
} from './TaskItem.style';

const TasksItem = props => {
	const { title, description, completed, dueTime, updateTask, id, deleteTask } = props;
	const [showModal, setShowModal] = useState(false);

	const getRemainingDateString = () => {
		const dueDate = moment(dueTime);
		const dateNow = moment(new Date());
		dateNow.diff(dueDate, 'hours');
		const timeRemainingInWeeks = dueDate.diff(dateNow, 'weeks', true);
		const timeRemainingInDays = Math.floor((timeRemainingInWeeks - Math.floor(timeRemainingInWeeks)) * 7);
		if (timeRemainingInWeeks > 0)
			return `Remaining Time : ${Math.floor(timeRemainingInWeeks)} weeks and ${timeRemainingInDays} days `;
		return `Deadline line Has been reached`;
	};

	const taskItemOnClickHandler = () => {
		setShowModal(!showModal);
	};

	const deleteIconOnClickHandler = e => {
		e.stopPropagation();
		deleteTask(id);
	};

	return (
		<>
			<TaskItemModal
				title={title}
				checked={completed}
				dueDateStart={dueTime}
				description={description}
				setShowModal={taskItemOnClickHandler}
				open={showModal}
				updateTask={updateTask}
				mode="Edit"
				id={id}
			/>
			<TasksItemWrapper onClick={() => taskItemOnClickHandler()}>
				<DeleteIcon onClick={e => deleteIconOnClickHandler(e)} name="delete"></DeleteIcon>
				<TasksItemHeaderWWrapper>
					<Title>{title}</Title>

					<DueTimeWrapper>{getRemainingDateString()}</DueTimeWrapper>
				</TasksItemHeaderWWrapper>
				<TaskItemBody>
					<Checkbox toggle checked={completed} />
					<TaskItemDescription>{description}</TaskItemDescription>
				</TaskItemBody>
			</TasksItemWrapper>
		</>
	);
};

export default TasksItem;
