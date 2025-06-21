import React, { useState } from 'react';
import './AdminStyles.css';

const CourseManager = () => {
  const [courses, setCourses] = useState(['Computer', 'Mechanical']);
  const [newCourse, setNewCourse] = useState('');

  const addCourse = () => {
    if (newCourse && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const deleteCourse = (course) => {
    setCourses(courses.filter(c => c !== course));
  };

  return (
    <div className="admin-card">
      <h2>🎓 Manage Engineering Streams</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Add new stream"
      />
      <button onClick={addCourse}>Add</button>
      <ul>
        {courses.map(course => (
          <li key={course}>{course} <button onClick={() => deleteCourse(course)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;