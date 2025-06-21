import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (active && time > 0) {
      timer = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active, time]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Pomodoro Timer</h2>
      <div className="text-4xl mb-4">{formatTime(time)}</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setActive(!active)}>
        {active ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Pomodoro;
