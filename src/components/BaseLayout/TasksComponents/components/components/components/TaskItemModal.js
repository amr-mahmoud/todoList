import React, { useState, useEffect } from 'react';
import ModalComponent from '../../../../../UI/Modal';
import { Button, Modal, Input, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	.ui.input {
		margin: 20px 0;
		width: 50%;
	}
`;
const ModalCheckBox = styled(Checkbox)`
	margin-left: 150px;
`;
const CheckboxWrapper = styled.div`
	margin: 30px 0;
`;

const TaskItemModal = props => {
	const { open, mode, setShowModal, checked, title, description, id, updateTask, createTask } = props;
	const [dueDate, setDueDate] = useState(new Date());
	const [taskCompleted, setTaskCompleted] = useState(checked);
	const [taskTitle, setTaskTitle] = useState('');
	const [taskDescription, setTaskDescription] = useState(description);

	useEffect(() => {
		setTaskTitle(title);
	}, [title]);

	const checkBoxHandler = date => {
		setTaskCompleted(!taskCompleted);
	};
	const datePickerHandler = date => {
		setDueDate(date);
	};

	const titleChangeHandler = (_e, data) => {
		const { value } = data;
		setTaskTitle(value);
	};

	const descriptionChangeHandler = (e, data) => {
		const { value } = data;
		setTaskDescription(value);
	};

	const submitTask = () => {
		const task = {
			id: id,
			title: taskTitle,
			completed: taskCompleted,
			description: taskDescription,
			dueTime: dueDate,
		};
		mode === 'Create' ? createTask(task) : updateTask(task);
		setShowModal(false);
	};

	return (
		<ModalComponent open={open} size={'large'}>
			<Modal.Header>{`${mode} Task`}</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<ModalBodyWrapper>
						<Input defaultValue={title} onChange={(e, data) => titleChangeHandler(e, data)} label={'Title'} />

						<Input
							defaultValue={description}
							onChange={(e, data) => descriptionChangeHandler(e, data)}
							label={'Description'}
						/>
						<CheckboxWrapper>
							<DatePicker showTimeSelect onChange={date => datePickerHandler(date)} />
							<ModalCheckBox
								label={taskCompleted ? 'Completed' : 'Not Finished'}
								checked={taskCompleted}
								toggle
								onChange={() => checkBoxHandler()}
							></ModalCheckBox>
						</CheckboxWrapper>
					</ModalBodyWrapper>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button content={'cancel'} color="black" onClick={() => setShowModal(false)}></Button>
				<Button primary icon="checkmark" content={'Submit'} onClick={() => submitTask()} />
			</Modal.Actions>
		</ModalComponent>
	);
};

export default TaskItemModal;
