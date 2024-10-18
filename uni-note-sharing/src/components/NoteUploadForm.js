// src/components/NoteUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NoteUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('note', file);
    try {
      const response = await axios.post('/api/notes', formData);
      console.log(response.data);  // Handle success
    } catch (error) {
      console.error('Error uploading note', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload Note</button>
    </form>
  );
};

export default NoteUploadForm;
