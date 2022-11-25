import { useRef, useState } from "react";

export default function useTimer() {
  const initialState = { m: 0, s: 0, hr: 0, ms: 0 };
  const [time, setTime] = useState(initialState);

  let timerRef = useRef();

  const calculateTime = () => {
    setTime((prevTime) => {
      let timeObj = { ...prevTime };
      if (prevTime.ms + 1 === 100) {
        timeObj.s = (prevTime.s + 1) % 60;
        if (prevTime.s + 1 === 60) {
          timeObj.m = (prevTime.m + 1) % 60;
          if (prevTime.m + 1 === 60) {
            timeObj.hr = prevTime.hr + 1;
          }
        }
      }

      timeObj.ms = (prevTime.ms + 1) % 100;
      return timeObj;
    });
  };

  const startTimer = () => {
    timerRef.current = setInterval(calculateTime, 10);
  };

  const pauseTimer = () => {
    removeTimer();
  };

  const resetTimer = () => {
    removeTimer();
    setTime(initialState);
  };

  const removeTimer = () => {
    timerRef.current && clearInterval(timerRef.current);
  };

  return {
    time,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}
