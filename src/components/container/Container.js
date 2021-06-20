import React from 'react';
import styled from 'styled-components';

import Heading from '../../ui/Heading';
import SubHeading from '../../ui/SubHeading';
import UploaderContainer from './UploaderContainer';

const Container = () => {
    return (
        <ContainerWrapper>
            <Heading width="60%" font="48px">
                Host your files secure & fast with DropItHere
            </Heading>
            <SubHeading>
                Grab your premium access today, check out our latest deal
            </SubHeading>

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