import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Checkbox } from 'semantic-ui-react';

const TaskItemDescription = styled.p`
	overflow: hidden;
	height: 90px;
`;
const TasksItemWrapper = styled.div`
	width: 70%;
	padding: 25px;
	margin: 0 auto 15px auto;
	border-radius: 40px;

	background: #8281818c;
	:hover {
		cursor: pointer;
		background: #59c7eaa6;
		padding: 30px;
	}
`;

const TasksItemHeaderWWrapper = styled.div`
	display: flex;
	direction: row;
	justify-content: space-between;
`;
const Title = styled.h1`
	font-size: 25px;
`;
const DueTimeWrapper = styled.div`
	margin: auto 0;
	font-size: 12px;
`;
const TaskItemBody = styled.div``;

const TasksItem = props => {
	const { title, description, completed, dueTime } = props;

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
	return (
		<TasksItemWrapper>
			<TasksItemHeaderWWrapper>
				<Title>{title}</Title>
				<DueTimeWrapper>{getRemainingDateString()}</DueTimeWrapper>
			</TasksItemHeaderWWrapper>

			<TaskItemBody>
				<Checkbox toggle />
				<TaskItemDescription>{description}</TaskItemDescription>
			</TaskItemBody>
		</TasksItemWrapper>
	);
};

export default TasksItem;
