import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Tesseract from 'tesseract.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ImageUpload = () => {
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDrop = async (acceptedFiles) => {
    const image = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(image)); // Store the image URL
  };

  const handleExtractText = async () => {
    if (selectedImage) {
      setLoading(true);
      const { data: { text } } = await Tesseract.recognize(selectedImage, 'eng');
      setText(text);
      setLoading(false);
    } else {
      alert('Please upload an image before extracting text.');
    }
  };

  const handleCopyText = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag and drop an image, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {selectedImage && <img src={selectedImage} alt="Uploaded" className='max-w-md m-10' />}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleExtractText} disabled={loading} className='border rounded p-3 hover:bg-gradient-to-r from-indigo-500'>
          {loading ? 'Extracting Text...' : 'Extract Text'}
        </button>
        {loading && (
          <div style={{ marginTop: '10px' }}>
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            Loading...
          </div>
        )}
        {text && (
          <div style={{ marginTop: '20px' }}>
            <strong>Extracted Text:</strong>
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.2em', margin: '10px 0' }}>
              {text}
              <CopyToClipboard text={text} onCopy={handleCopyText}>
                <button className='ml-2 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800'>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </CopyToClipboard>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
