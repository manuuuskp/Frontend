import { useState } from "react";
import "./countdown.css";
import { useCountDownTimer } from "./useCountDownTimer";

function CountDown() {
    // const [hour, setHour] = useState("");
    // const [minutes, setMinutes] = useState("");
    // const [seconds, setSeconds] = useState("");
    const {
        hourVal,
        minutesVal,
        secVal,
        // setHourVal,
        // setMinutesVal,
        // setSecVal,
        onClickStart
    } = useCountDownTimer();
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    let targetValue = e.target.value.slice(0,2);
    if(name === 'hour') {
        // setHourVal(parseInt(targetValue))
        hourVal.current = parseInt(targetValue);
    } else if(name === "minutes") {
        // setMinutesVal(parseInt(targetValue));
        minutesVal.current = parseInt(targetValue);
    } else {
        // setSecVal(parseInt(targetValue));
        secVal.current = parseInt(targetValue);
    }
  };
  return (
    <div className="countdown__container">
      <h2>Countdown Timer</h2>
      <div className="countdown__labelcontainer">
        <p className="countdown__label">Hour</p>
        <p className="countdown__label">Minute</p>
        <p className="countdown__label">Seconds</p>
      </div>
      <div className="countdown__inputcontainer">
        <input
          type="number"
          placeholder="00"
          className="countdown__input hour"
          onChange={(e) => onHandleInputChange(e, 'hour')}
          value={hourVal.current}
        />
        <input
          type="number"
          placeholder="00"
          className="countdown__input minute"
          onChange={(e) => onHandleInputChange(e, 'minutes')}
          value={minutesVal.current}
        />
        <input
          type="number"
          placeholder="00"
          className="countdown__input sec"
          onChange={(e) => onHandleInputChange(e, 'seconds')}
          value={secVal.current}
        />
      </div>
      <div className="countdown__buttoncontainer">
        <button className="countdown__button start" onClick={onClickStart}>Start</button>
        <button className="countdown__button stop">Stop</button>
        <button className="countdown__button reset">Reset</button>
      </div>
    </div>
  );
}

export default CountDown;
