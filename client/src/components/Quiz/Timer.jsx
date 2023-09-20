import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeExpired }) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      onTimeExpired();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, onTimeExpired]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="flex-col font-bold text-2xl mb-4 text-start">
      {formatTime(seconds)}
    </div>
  );
};

export default Timer;
