import './App.css';
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState('');
  const qrRef = useRef(null);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeFileName = (e) => {
    setFileName(e.target.value);
  };

  const handleDownloadQRCode = () => {
    const canvas = document.querySelector('canvas'); // Select the QR code canvas element
    const pngUrl = canvas.toDataURL('image/png'); // Convert the canvas to a PNG data URL

    const downloadLink = document.createElement('a'); // Create a download link element
    downloadLink.href = pngUrl; // Set the href attribute to the PNG data URL
    downloadLink.download = fileName ? `${fileName}.png` : 'qrcode.png'; // Set the download attribute with the desired file name
    downloadLink.click(); // Simulate a click on the download link
  };

  return (
    <div className='container'>
      <div className='title'>QR Code Generator</div>

      <input
        className='textinput'
        type='text'
        value={text}
        onChange={handleChangeText}
        placeholder='Enter text for QR code'
      />
      
      

      {text && (
        <div className='qrcontainer'>
          <QRCode id='qrcode' value={text} ref={qrRef} />
          <input
        className='textinputnamefile'
        type='text'
        value={fileName}
        onChange={handleChangeFileName}
        placeholder='Name file'
      />
          <button className='downloadlink' onClick={handleDownloadQRCode}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
