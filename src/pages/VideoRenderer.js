/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Loader from '../ui/Loader';
import Downloader from '../components/downloader/Downloader';
import { fetchFilesFromStorage } from '../firebase/utils';

const VideoRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [videoSource, setVideoSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
      setVideoSource(res);
      setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <VideoContainer>
      {isFileLoaded ? (
        <video width='80%' autoPlay controls>
          <source src={videoSource.value}></source>
        </video>
      ) : (
        <Loader />
      )}
      {isFileLoaded && <Downloader fileURL={videoSource.value} />}
    </VideoContainer>
  );
};

export default VideoRenderer;

// Styles

const VideoContainer = styled.div`
  width: 80%;
  min-height: 600px;
  margin: 50px auto;
  background: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    max-width: 100%;
    height: auto;
  }
`;
