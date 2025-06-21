import React, { useState } from 'react';
import './AdminStyles.css';

const TestUploader = () => {
  const [course, setCourse] = useState('');
  const [question, setQuestion] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleUpload = () => {
    alert(`Uploaded test and PDF for ${course}`);
    setQuestion('');
    setPdf(null);
  };

  return (
    <div className="admin-card">
      <h2>📄 Upload Test Questions & PDFs</h2>
      <select onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        <option value="Computer">Computer</option>
        <option value="Mechanical">Mechanical</option>
      </select>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter test questions"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setPdf(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default TestUploader;
