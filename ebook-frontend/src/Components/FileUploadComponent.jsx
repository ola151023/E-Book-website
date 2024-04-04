import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

const FileUploadComponent = ({ onFileUpload, uploading }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? <CircularProgress size={24} /> : 'Upload'}
      </Button>
    </div>
  );
};

export default FileUploadComponent;
