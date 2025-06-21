import React from 'react';
import CourseManager from './CourseManager';
import VideoEditor from './VideoEditor';
import TestUploader from './TestUploader';
import './AdminStyles.css'; // Make sure this CSS file exists

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>

      <div className="admin-section">
        <div className="admin-card">
          <CourseManager />
        </div>

        <div className="admin-card">
          <VideoEditor />
        </div>

        <div className="admin-card">
          <TestUploader />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
