'use client';

import { useEffect, useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = () => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const dayName = days[time.getDay()];
    const date = time.getDate();
    const month = time.toLocaleString('en-US', { month: 'long' });
    const year = time.getFullYear();

    return `${dayName}, ${date} ${month} ${year}`;
  };

  return (
    <div className="text-sm">
      <h1 className="text-end">{formatTime()}</h1>
      <h1>{formatDate()}</h1>
    </div>
  );
};
export default DigitalClock;
