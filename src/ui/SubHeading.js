import React from 'react';
import styled from 'styled-components';

const SubHeading = ({font, children}) => {
    return (
        <StyledSubHeading font={font}>
            {children}
        </StyledSubHeading>
    )
}

export default SubHeading


// Styles

const StyledSubHeading = styled.p`
    font-family: 'Philosopher', sans-serif;
    font-size: ${props => props.font || '28px'};
    line-height: 1.4;
    text-align: center;
    color: var(--primary);

`;
