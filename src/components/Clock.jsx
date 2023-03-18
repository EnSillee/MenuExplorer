import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 500);
    return () => {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className='text-right text-gray-500 pr-4'>
      <span className=' text-xs'>{date.toLocaleTimeString().slice(2)}</span>
    </div>
  );
}

export default Clock;