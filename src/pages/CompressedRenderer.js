/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Heading from '../ui/Heading';
import Downloader from '../components/downloader/Downloader';
import { fetchFilesFromStorage } from '../firebase/utils';

const CompressedRenderer = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [compressedSource, setCompressedSource] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // Component did mount

  useEffect(() => {
    // Fetching files

    fetchFilesFromStorage(id).then((res) => {
      setCompressedSource(res);
      setIsFileLoaded(!isFileLoaded);
    });
  }, [id]);

  return (
    <CompressedContainer>
      <ContainerHero>
        <Heading>
          Sorry! We can't preview this file. But you can download the file by
          clicking on the button down right below
        </Heading>
      </ContainerHero>
      {isFileLoaded && <Downloader file={compressedSource} />}
    </CompressedContainer>
  );
};

export default CompressedRenderer;

// Styles

const CompressedContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerHero = styled.div`
  max-width: 80%;
  padding: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
