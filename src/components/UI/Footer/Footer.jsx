import React from 'react';
import styled from 'styled-components';
import style from './Footer.style';

const Footer = ({ children, className, rest }) => (
    <div {...rest} className={className}>
        {children}
    </div>
);

export default styled(Footer)`
    ${style};
`;
