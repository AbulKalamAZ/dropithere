/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Loader from '../ui/Loader';
import { fetchFilesFromStorage } from '../firebase/utils';

const ImageRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [imgSource, setImgSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
      setImgSource(res);
      setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <ImageContainer>
      {isFileLoaded ? (
        <img src={imgSource.value} alt='uploaded file' />
      ) : (
        <Loader />
      )}
    </ImageContainer>
  );
};

export default ImageRenderer;

// Styles

const ImageContainer = styled.figure`
  width: 80%;
  min-height: 600px;
  margin: 50px auto;
  background: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;
