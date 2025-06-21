import React, { useState } from 'react';
import './AdminStyles.css';

const VideoEditor = () => {
  const [course, setCourse] = useState('');
  const [link, setLink] = useState('');

  const handleUpdate = () => {
    alert(`Updated YouTube link for ${course}: ${link}`);
    setLink('');
  };

  return (
    <div className="admin-card">
      <h2>🎥 Update YouTube Links</h2>
      <select onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        <option value="Computer">Computer</option>
        <option value="Mechanical">Mechanical</option>
      </select>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste YouTube link"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default VideoEditor;