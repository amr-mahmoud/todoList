import { css } from 'styled-components';

export default css`
	background-color: ${props => props.theme.primaryLayout};
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	height: 50px;
	padding: 0 0.625rem;
`;
