import './App.css';

import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

import DownloadLink from 'react-download-link';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const qrRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDownloadQRCode = (filename) => {
    const canvas = document.querySelector('canvas'); // Select the QR code canvas element
    const pngUrl = canvas.toDataURL('image/png'); // Convert the canvas to a PNG data URL
   
    const downloadLink = document.createElement('a'); // Create a download link element
    downloadLink.href = pngUrl; // Set the href attribute to the PNG data URL
    downloadLink.download = filename; // Set the download attribute with the desired file name
    downloadLink.click(); // Simulate a click on the download link
  };
  
  return (
    <div className='container'>
      <div className='title'>QR Code Generator</div>

      <input className='textinput' type="text" value={text} onChange={handleChange} placeholder="Enter text for QR code" />
      
      {text && (
        <div className='qrcontainer'>
          <QRCode id='qrcode' value={text} ref={qrRef} />
          <p className='legend'>{text}</p>
          <button className='downloadlink' onClick={() => handleDownloadQRCode(`qrcode.${text}.png`)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;

