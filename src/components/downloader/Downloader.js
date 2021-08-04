import React from 'react';
import styled from 'styled-components';
import * as clipboard from 'clipboard-polyfill/text';

import DownloadIcon from '../icons/DownloadIcon';

function Downloader({ file }) {
  console.log(file);
  const handleDownload = (url) => {
    url &&
      clipboard.writeText(url).then(
        () => {
          console.log('success!');
        },
        () => {
          console.log('error!');
        }
      );
  };
  return (
    <DownloaderWrapper type='button' onClick={() => handleDownload(file.value)}>
      <IconBG />
      <DownloadIcon />
    </DownloaderWrapper>
  );
}

export default Downloader;

// Styles

const IconBG = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--primary);
  border-radius: 50%;
  position: absolute;
  left: -15px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: scale(0.5);
  transform-origin: center;
  transition: all 250ms ease-out;
`;

const DownloaderWrapper = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 80px;
  right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  svg {
    width: 40px;
    height: auto;
    fill: var(--primary);
    z-index: 1010;
    transition: all 250ms ease-out;
  }

  &:hover {
    ${IconBG} {
      opacity: 1;
      transform: scale(1);
    }

    svg {
      fill: var(--secondary);
    }
  }

  &:active {
    transform: scale(0.8);
  }
`;
