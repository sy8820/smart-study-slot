import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Logo" className="logo" />
          <h1 className="portal-name">Student Learning Hub</h1>
        </div>

        <nav className="dashboard-nav">
          <button onClick={() => navigate('/tutorials')} className="nav-btn">Tutorials</button>
          <button onClick={() => navigate('/tests')} className="nav-btn">Tests</button>
          <button onClick={() => navigate('/streak')} className="nav-btn">Streak</button>
          <button onClick={() => navigate('/pomodoro')} className="nav-btn">Pomodoro</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </nav>
      </header>

      <main className="dashboard-main">
        <section className="feature-card">
          <h2>📘 Tutorial Videos</h2>
          <p>Explore interactive video lessons tailored for all engineering subjects to build your core concepts.</p>
          <button onClick={() => navigate('/tutorials')}>Start Learning</button>
        </section>

        <section className="feature-card">
          <h2>🧪 Take a Test</h2>
          <p>Challenge yourself with regular subject-wise engineering quizzes and track your growth.</p>
          <button onClick={() => navigate('/tests')}>Start Test</button>
        </section>

        <section className="feature-card">
          <h2>🔥 Your Streak</h2>
          <p>Maintain your daily study streak and earn rewards as you stay consistent.</p>
          <button onClick={() => navigate('/streak')}>View Calendar</button>
        </section>

        <section className="feature-card">
          <h2>⏲️ Pomodoro Timer</h2>
          <p>Boost your focus with Pomodoro sessions and take tests efficiently.</p>
          <button onClick={() => navigate('/pomodoro')}>Launch Timer</button>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
