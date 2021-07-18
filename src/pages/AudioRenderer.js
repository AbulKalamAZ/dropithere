/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Loader from '../ui/Loader';
import Downloader from '../components/downloader/Downloader';
import { fetchFilesFromStorage } from '../firebase/utils';

const AudioRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [audioSource, setAudioSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
        setAudioSource(res);
      setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <AudioContainer>
      {isFileLoaded ? (
        <audio src={audioSource.value} autoPlay controls />
      ) : (
        <Loader />
      )}
      {isFileLoaded && <Downloader file={audioSource} />}
    </AudioContainer>
  );
};

export default AudioRenderer;

// Styles

const AudioContainer = styled.figure`
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

  .download-icon {

  }
`;
