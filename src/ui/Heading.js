import React from 'react';
import styled from 'styled-components';

const Heading = ({font, width, children}) => {
    return (
        <StyledHeading font={font} width={width}>
            {children}
        </StyledHeading>
    )
}

export default Heading


// Styles

const StyledHeading = styled.h1`
    width: ${props => props.width || '100%' };
    margin-bottom: 30px;
    font-family: 'Philosopher', sans-serif;
    font-size: ${props => props.font || '32px'};
    line-height: 1.4;
    text-align: center;
    color: var(--primary);

`;
