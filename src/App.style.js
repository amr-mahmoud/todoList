import styled from 'styled-components';

export const AppWrapper = styled.div`
	height: inherit;
	display: flex;
	flex-direction: column;
	.ui.visible.left.overlay.sidebar {
		background-color: #2185d0;
		padding-top: 60px;
		z-index: 99999999999;
	}
`;
