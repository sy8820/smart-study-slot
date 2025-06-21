import React, { useState } from 'react';
import './TestSection.css';

const TestSection = () => {
  const [selectedStream, setSelectedStream] = useState('');
  const [questions, setQuestions] = useState([]);
  const [notification, setNotification] = useState('');
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [breakTime, setBreakTime] = useState(false);

  const streamQuestions = {
    Mechanical: [
      'What is the first law of thermodynamics?',
      'Define stress and strain.',
      'What is Bernoulli’s equation?'
    ],
    Electrical: [
      'What is Ohm’s law?',
      'Define Kirchhoff’s current law.',
      'What is the role of a transformer?'
    ],
    Civil: [
      'What is meant by curing in concrete?',
      'Define bearing capacity of soil.',
      'What are the types of foundation?'
    ],
    Computer: [
      'What is a data structure?',
      'Define polymorphism in OOP.',
      'What is a primary key in SQL?'
    ]
  };

  const handleStreamSelect = (e) => {
    const stream = e.target.value;
    setSelectedStream(stream);
    setQuestions(streamQuestions[stream] || []);
    setNotification(`🎓 ${stream} Engineering Questions Loaded!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const startPomodoro = () => {
    setPomodoroActive(true);
    setBreakTime(false);
    setNotification('🍅 Pomodoro started! 25 minutes of focus time.');
    setTimeout(() => {
      setBreakTime(true);
      setNotification('🛌 Break time! Take 5 minutes.');
      setPomodoroActive(false);
    }, 1500000); // 25 minutes
  };

  return (
    <div className="test-section-container">
      <h2>🎯 Engineering Stream Test Zone</h2>

      {notification && <div className="popup">{notification}</div>}

      <div className="stream-selector">
        <label>Select Your Stream:</label>
        <select onChange={handleStreamSelect} value={selectedStream}>
          <option value="">-- Choose Stream --</option>
          <option value="Mechanical">Mechanical Engineering</option>
          <option value="Electrical">Electrical Engineering</option>
          <option value="Civil">Civil Engineering</option>
          <option value="Computer">Computer Engineering</option>
        </select>
      </div>

      {selectedStream && (
        <div className="question-display">
          <h3>Test Questions for {selectedStream}:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="pomodoro-timer">
        <button onClick={startPomodoro} disabled={pomodoroActive}>
          {pomodoroActive ? 'Focus in Progress...' : '⏱️ Start Pomodoro Learning'}
        </button>
        {breakTime && <p>🕒 Time for a break!</p>}
      </div>
    </div>
  );
};

export default TestSection;