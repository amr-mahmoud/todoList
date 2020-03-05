import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const CompletedLabel = styled.div`
	margin: 10px 0;
	color: ${props => props.theme.blueTheme};
	font-family: 'Open Sans', sans-serif;
`;
const TaskItemDescription = styled.p`
	overflow: hidden;
	height: 90px;
`;
const TasksItemWrapper = styled.div`
	width: 70%;
	padding: 25px;
	margin: 0 auto 15px auto;
	border-radius: 40px;

	background: ${props => props.theme.secondary};
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
	color: #fff9f9;
	margin: auto 0;
`;
const DueTimeWrapper = styled.div`
	color: ${props => props.color};
	font-weight: ${props => (props.color ? 'bold' : 'normal')};
	margin: auto 0;
	font-size: 12px;
`;
const TaskItemBody = styled.div`
	.ui.label.ui.label {
		margin: 10px 0;
		color: #2285d0;
		background-color: #a5a5a5;
	}
`;

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
	CompletedLabel,
};
