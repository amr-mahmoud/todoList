import { css } from 'styled-components';

export default css`
	background-color: red;
	width: 100%;
	position: ${props => (props.position ? `${props.position}` : 'fixed')};
	left: 0;
	bottom: ${props => (props.bottom ? `${props.bottom}rem` : '0')};
	right: 0;
	height: ${props => (props.height ? `${props.height}` : '50px')};
	padding: 0 0.625rem;
`;
