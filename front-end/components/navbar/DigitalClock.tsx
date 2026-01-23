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
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
    ];

    const dayName = days[time.getDay()];
    const date = time.getDate();
    const month = time.toLocaleString('th-TH', { month: 'long' });
    const year = time.getFullYear();

    return `${dayName}, ${date} ${month} ${year}`;
  };

  return (
    <div className="text-sm">
      <h1 className="text-end" suppressHydrationWarning>
        {formatTime()}
      </h1>
      <h1>{formatDate()}</h1>
    </div>
  );
};
export default DigitalClock;
