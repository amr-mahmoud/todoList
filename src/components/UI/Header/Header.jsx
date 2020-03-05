import React from 'react';
import styled from 'styled-components';
import style from './Header.style';

const Header = ({ children, className, rest }) => (
    <div {...rest} className={className}>
        
        {children}

    </div>
);

export default styled(Header)`
    ${style};
`;
