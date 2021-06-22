import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import UploaderContainer from './UploaderContainer';

const Container = () => {

    const headingAnimation = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(50px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)'
        },
    })

    const subHeadingAnimation = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(50px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)'
        },
        delay: 200
    })
    
    return (
        <ContainerWrapper>
            <AnimatedHeading  style={headingAnimation} width="60%" font="48px">
                <animated.span >Host your files secure & fast with DropItHere</animated.span>
            </AnimatedHeading>
            <AnimatedSubHeading style={subHeadingAnimation}>
                Grab your premium access today, check out our latest deal
            </AnimatedSubHeading>

            <UploaderContainer></UploaderContainer>
        </ContainerWrapper>
    )
}

export default Container


// Styles

const ContainerWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    max-width: 1360px;
    min-height: 580px;
    margin: 0 auto;
    padding: 60px;
    background-color: var(--secondary);
    border-radius: 50px;

`;

const AnimatedHeading = styled(animated.h1)`
    width: ${props => props.width || '100%' };
    margin-bottom: 30px;
    font-family: 'Philosopher', sans-serif;
    font-size: ${props => props.font || '32px'};
    line-height: 1.4;
    text-align: center;
    color: var(--primary);
`;


const AnimatedSubHeading = styled(animated.p)`

    font-family: 'Philosopher', sans-serif;
    font-size: ${props => props.font || '28px'};
    line-height: 1.4;
    text-align: center;
    color: var(--primary);
`;