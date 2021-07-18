import React from 'react'
import styled, { keyframes } from 'styled-components';

import DownloadIcon from '../icons/DownloadIcon';

const FileDownloader = require('js-file-download');

function Downloader({ file }) {
    const handleDownload = (url, name) => {
        console.log(url)
        FileDownloader(url, name.toLowerCase());
    }
    console.log(file)
    return (
        <DownloaderWrapper 
            onClick={() => handleDownload(file.value, file.name)}
        >
            <DownloadIcon />
        </DownloaderWrapper>
    )
}

export default Downloader

// Styles

const bounce = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-100px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`;
const DownloaderWrapper = styled.a`
    width: 80px;
    height: 80px;
    cursor: pointer;
    position: fixed;
    bottom: 80px;
    right: 80px;
    animation: ${bounce} 2s ease infinite;
    
    svg {
        width: 100%;
        height: auto;
    }
`;