import React, { useEffect, useState } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();
  const minutes = `${time.getMinutes() < 10 ? 0 : ''}${time.getMinutes()}`;

  return <div>{`${hours}:${minutes}`}</div>;
}
