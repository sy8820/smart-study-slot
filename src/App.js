import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VideoTutorials from './components/VideoTutorials';
import CalendarStreak from './components/CalendarStreak';
import PomodoroTimer from './components/PomodoroTimer';
import TestSection from './components/TestSection';

import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard'; // ✅ Keep only this one
import CourseManager from './components/admin/CourseManager';
import VideoEditor from './components/admin/VideoEditor';
import TestUploader from './components/admin/TestUploader';

const App = () => {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (checkingAuth) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/tutorials" element={user ? <VideoTutorials /> : <Navigate to="/" />} />
        <Route path="/tests" element={user ? <TestSection /> : <Navigate to="/" />} />
        <Route path="/streak" element={user ? <CalendarStreak /> : <Navigate to="/" />} />
        <Route path="/pomodoro" element={user ? <PomodoroTimer /> : <Navigate to="/" />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
