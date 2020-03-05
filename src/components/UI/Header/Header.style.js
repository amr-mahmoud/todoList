import { css } from 'styled-components';

export default css`
	width: 100%;
	height: 50px;
	z-index: 99999;
	background-color: ${props => props.theme.primaryLayout};
	position: fixed;
	display: flex;
	i {
		width: 100%;
		font-size: 25px;
		margin-top: 16px;
		color: white;
	}
	a {
		width: 100%;
	}
`;
