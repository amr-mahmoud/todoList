import styled from 'styled-components';

export const BaseLayoutWrapper = styled.div`
	height: inherit;
	display: flex;
	flex-direction: column;
	.ui.visible.left.overlay.sidebar {
		background-color: #2185d0;
		padding-top: 30px;
		z-index: 99999999999;
	}
`;
