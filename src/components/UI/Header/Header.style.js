import { css } from 'styled-components';

export default css`
	width: 100%;
	height: 50px;
	z-index: 999999999999;
	background-color: ${props => props.theme.primaryLayout};
	position: fixed;
`;
