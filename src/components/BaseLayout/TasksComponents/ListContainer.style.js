import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const Loaderwrapper = styled.div`
	background-color: ${props => props.theme.secondaryBody};
	width: 100%;
	margin: 0 20px;
`;

export const ListContainerWrapper = styled.div`
	background-color: ${props => props.theme.secondaryBody};
	width: 100%;
	padding: 60px;
	padding-bottom: 80px;
	margin: 0 20px;
	height: fit-content;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	.ui.pagination.menu {
		width: fit-content;
		margin: auto;
	}
	.ui.inverted.loader {
		position: fixed;
		top: 85%;
		font-size: 15px;
	}
`;

export const CircularButton = styled(Button)`
	width: 60px;
	height: 60px;
	position: fixed;
	top: 85%;
	left: 85%;
`;
