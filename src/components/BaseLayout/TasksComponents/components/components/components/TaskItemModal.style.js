import styled from 'styled-components';
import { Checkbox } from 'semantic-ui-react';
const ModalBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	.ui.input {
		margin: 20px 0;
		width: 50%;
	}
`;
const ModalCheckBox = styled(Checkbox)`
	margin-left: 150px;
`;
const CheckboxWrapper = styled.div`
	margin: 30px 0;
`;

export { CheckboxWrapper, ModalCheckBox, ModalBodyWrapper };
