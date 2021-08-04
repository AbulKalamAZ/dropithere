/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Loader from '../ui/Loader';
import Downloader from '../components/downloader/Downloader';
import { fetchFilesFromStorage } from '../firebase/utils';

const TextRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [textSource, setTextSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
      setTextSource(res);
      setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <HTMLContainer>
      {isFileLoaded ? (
        <iframe src={textSource.value} title='dropItHere HTML File'></iframe>
      ) : (
        <Loader />
      )}
      {isFileLoaded && <Downloader file={textSource} />}
    </HTMLContainer>
  );
};

export default TextRenderer;

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
