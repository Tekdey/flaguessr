import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({expiryTimestamp, setEndGame}) {
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => setEndGame(true)});


  return (
    <>
      <span className=' text-3xl'>{minutes}:{seconds}</span>
    </>
  );
}

export default Timer