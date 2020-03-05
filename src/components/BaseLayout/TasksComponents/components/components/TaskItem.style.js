import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

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

	i {
		font-size: 1.125em;
		float: right;
		margin: -1px 0 10px 20px;
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

const DeleteIcon = styled(Icon)`
	font-size: 1.125em;
	float: right;
	margin: -1px 0 10px 20px;
	cursor: pointer;
`;

export {
	DeleteIcon,
	TaskItemBody,
	Title,
	TasksItemHeaderWWrapper,
	DueTimeWrapper,
	TasksItemWrapper,
	TaskItemDescription,
};
