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
	CompletedLabel,
	TaskItemDescription,
} from './TaskItem.style';

const TasksItem = props => {
	const { title, description, completed, dueTime, updateTask, id, deleteTask, limitedFunctionality } = props;
	const [showModal, setShowModal] = useState(false);

	const getRemainingDateString = () => {
		const dueDate = moment(dueTime);
		const dateNow = moment(new Date());
		dateNow.diff(dueDate, 'hours');
		const timeRemainingInWeeks = dueDate.diff(dateNow, 'weeks', true);
		const timeRemainingInDays = Math.floor((timeRemainingInWeeks - Math.floor(timeRemainingInWeeks)) * 7);
		if (timeRemainingInWeeks > 0)
			return (
				<DueTimeWrapper>{`Remaining Time : ${Math.floor(
					timeRemainingInWeeks
				)} weeks and ${timeRemainingInDays} days `}</DueTimeWrapper>
			);
		return <DueTimeWrapper color="#ce3030d4">{`Deadline line Has been reached`}</DueTimeWrapper>;
	};

	const taskItemOnClickHandler = () => {
		if (limitedFunctionality) return;
		setShowModal(!showModal);
	};

	const deleteIconOnClickHandler = e => {
		e.stopPropagation();
		deleteTask(id);
	};

	const checkBoxHandler = () => {
		const task = {
			id: id,
			title: title,
			completed: false,
			description: description,
			dueTime: dueTime,
		};
		updateTask(task);
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
				{!limitedFunctionality && <DeleteIcon onClick={e => deleteIconOnClickHandler(e)} name="delete"></DeleteIcon>}
				<TasksItemHeaderWWrapper>
					<Title>{title}</Title>
					{getRemainingDateString()}
				</TasksItemHeaderWWrapper>
				<TaskItemBody>
					<CompletedLabel>{completed ? 'The Task has been completed' : 'The task is not done yet'}</CompletedLabel>{' '}
					{limitedFunctionality && (
						<Checkbox label="UnCompleted" onChange={() => checkBoxHandler()} checked={completed} />
					)}
					<TaskItemDescription>{description}</TaskItemDescription>
				</TaskItemBody>
			</TasksItemWrapper>
		</>
	);
};

export default TasksItem;
