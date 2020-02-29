import React from 'react';
import styled from 'styled-components';
import style from './Body.style';

const Body = ({ children, className, rest }) => (
	<div {...rest} className={className}>
		{children}
	</div>
);

export default styled(Body)`
	${style};
`;
