/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';

import SubHeading from '../../ui/SubHeading';
import Button from '../../ui/Button';
import Loader from '../../ui/Loader';
import firebase from '../../firebase/config';

const UploaderContainer = () => {
  const location = window.location.href;
  const [cardHeader, setCardHeader] = useState(
    'Browse your files here to upload'
  );
  const [uploading, setUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [fileID, setFileID] = useState('');
  const [file, setFile] = useState({});
  const inputField = useRef();

  const handleChange = () => {
    setFile({
      type: inputField.current.files[0].type.split('/')[0],
      value: inputField.current.files[0],
      fileName: inputField.current.files[0].name,
    });
  };
  const handleButtonClick = () => {
    inputField.current.click();
  };
  const handleUploadFiles = () => {
    // Change Header
    setCardHeader('Uploading files . .');
    setUploading(!uploading);

    //Create refference
    const storageRef = firebase.storage().ref(`${file.type}/${file.fileName}`);

    storageRef.put(file.value).then((res) => {
      storageRef
        .getDownloadURL()
        .then((url) => {
          // Change Header
          setCardHeader('Uploading files info . .');

          // Get the data
          const fileInfo = { type: file.type, value: url };

          // Create a firestore refference
          const firestore = firebase.firestore();

          //Send  file data request to database
          firestore
            .collection('files')
            .add(fileInfo)
            .then((res) => {
              setUploading(!uploading);
              setIsUploaded(!isUploaded);
              setFileID(res.id);

              // Change Header
              setCardHeader(
                `Your ${file.type} is available at the following URL`
              );
            });
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    });
  };

  // ANimation

  const containerAnimation = useSpring({
    from: {
      scale: 0.6,
      opacity: 0,
      transform: 'translateY(50px)',
    },
    to: {
      scale: 1,
      opacity: 1,
      transform: 'translateY(0px)',
    },
    delay: 600,
  });

  const buttonAnimation = useTransition(file.fileName, {
    from: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
    leave: {
      opacity: 0,
      scale: 0.1,
    },
  });
  return (
    <>
      <ContainerWrapper
        style={containerAnimation}
        isuploaded={isUploaded ? 1 : 0}
      >
        <SubHeading font='24px'>{cardHeader}</SubHeading>

        {!file.fileName && (
          <Button
            label='Browse Files'
            reff={inputField}
            handleChange={handleChange}
            handleButtonClick={handleButtonClick}
          />
        )}
        {!uploading
          ? buttonAnimation(
              (style, bool) =>
                bool && (
                  <UploadButton style={style} onClick={handleUploadFiles}>
                    Upload
                  </UploadButton>
                )
            )
          : !fileID && <Loader />}

        <SubHeading font='18px'>
          {isUploaded ? (
            <a href={`${location}${file.type}/${fileID}`} target='_blank'>
              {location}
              {file.type}/{fileID}`
            </a>
          ) : (
            file.fileName || 'No file choosen'
          )}
        </SubHeading>
      </ContainerWrapper>
    </>
  );
};

export default UploaderContainer;

// Styles

const ContainerWrapper = styled(animated.div)`
  position: absolute;
  bottom: -30px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isuploaded ? 'space-around' : 'space-between'};
  align-items: center;
  margin: 0 auto;
  min-width: 500px;
  min-height: 250px;
  padding: 30px;
  background-color: ${(props) =>
    props.isuploaded ? '#dadcec' : 'var(--white)'};
  border-radius: 50px;
  box-shadow: 26px 25px 50px -10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const UploadButton = styled(animated.button).attrs(() => ({
  type: 'button',
}))`
  padding: 12px 24px;
  border: 2px solid var(--primary);
  outline: none;
  border-radius: 50px;
  background-color: transparent;
  font-family: 'Philosopher', sans-serif;
  font-size: ${(props) => props.font || '18px'};
  color: var(--primary);
  text-align: center;
  cursor: pointer;
`;
