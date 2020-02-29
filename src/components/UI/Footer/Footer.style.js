import { css } from 'styled-components';

export default css`
	background-color: ${props => (props.bgColor ? `${props.bgColor}` : '#fff')};
	box-shadow: ${props => (props.boxShadow ? '0 0 4px 0 rgba(0,0,0,0.5)' : null)};
	position: ${props => (props.position ? `${props.position}` : 'fixed')};
	left: 0;
	bottom: ${props => (props.bottom ? `${props.bottom}rem` : '0')};
	right: 0;
	height: ${props => (props.height ? `${props.height}` : '50px')};
	padding: 0 0.625rem;
`;
