import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeExpired }) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);
  let interval;

  useEffect(() => {

    if (!seconds) {
      setIsActive(false);
      onTimeExpired();
      clearInterval(interval);
    }

    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval)
    };

  }, [isActive, seconds, onTimeExpired]);

  const formatTime = React.useMemo(() => {
    const minutes = Math.floor(seconds / 60);
    const secondLeft = (seconds % 60);

    return `${minutes}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }, [seconds]);

  return (
    <div className="flex-col font-bold text-2xl mb-4 text-start">
      {formatTime}
    </div>
  );
};

export default Timer;
