//U46368100
import React, { useState } from 'react';

export default function UploadButton() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      alert('Image uploaded successfully!');
      setUploading(false);
    }, 2000); // Simulate upload delay
  };

  return (
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
}