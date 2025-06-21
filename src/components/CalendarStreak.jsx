// src/components/CalendarStreak.jsx
import React from 'react';
import './CalendarStreak.css'; // ✅ Correctly importing CSS

const CalendarStreak = () => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Day {today}<span className="subtext"> 05:34:13 left</span></h2>
      </div>

      <div className="calendar-grid">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
          <div key={d} className="calendar-day-header">{d}</div>
        ))}
        {daysInMonth.map((day) => (
          <div key={day} className={`calendar-day ${day === today ? 'today' : ''}`}>{day}</div>
        ))}
      </div>

      <div className="calendar-footer">
        <div className="premium-box">
          <h3>
            Weekly Premium <span className="info-icon">❓</span>
          </h3>
          <div className="weeks">
            <span className="week">W1</span>
            <span className="week">W2</span>
            <span className="week active">W3</span>
            <span className="week inactive">W4</span>
            <span className="week inactive">W5</span>
          </div>
          <div className="days-left">3 days left</div>
        </div>
        <div className="footer-links">
          <span className="redeem">🟢 0 Redeem</span>
          <span className="rules">Rules</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarStreak;
