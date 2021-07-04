/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Loader from '../ui/Loader';
import { fetchFilesFromStorage } from '../firebase/utils';

const HTMLRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [htmlSource, setHTMLSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
        setHTMLSource(res);
        setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <HTMLContainer>
      {isFileLoaded ? (
        <iframe 
            src={htmlSource.value}
            title="dropItHere HTML File"
        ></iframe>
      ) : (
        <Loader />
      )}
    </HTMLContainer>
  );
};

export default HTMLRenderer;

// Styles

const HTMLContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 100vh;
    border: 0;
  }
`;
