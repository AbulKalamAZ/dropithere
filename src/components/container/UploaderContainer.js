/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import SubHeading from '../../ui/SubHeading';
import Button from '../../ui/Button';

const UploaderContainer = () => {
    const [file, setFile] = useState({});
    const inputField = useRef();

    const handleChange = () => {
        setFile(inputField.current.files[0]);
    }
    const handleButtonClick = () => {
        inputField.current.click();
    }
    return (
        <ContainerWrapper>
            <SubHeading font="24px">
                Drop your files here to upload
            </SubHeading>
            <Button 
                label="Browse Files" 
                reff={inputField} 
                handleChange={handleChange} 
                handleButtonClick={handleButtonClick} 
            />
            <SubHeading font="18px">
                {file.name || 'No file choosen'}
            </SubHeading>
        </ContainerWrapper>
    )
}

export default UploaderContainer


// Styles

const ContainerWrapper = styled.div`
    position: absolute;
    bottom: -30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    min-width: 500px;
    min-height: 250px;
    padding: 30px;
    background-color: var(--white);
    border-radius: 50px;
    box-shadow: 26px 25px 50px -10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`;