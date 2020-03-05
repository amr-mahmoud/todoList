import React from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react'
import style from './ModalComponent.style';

const ModalComponent = ({ size,open,children, className, rest }) => (

    <Modal centered={false} {...rest}  size={size} open={open} className={className}>
        {children}
    </Modal>
);

export default styled(ModalComponent)`
    ${style};
`;
