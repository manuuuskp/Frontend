import { useRef, useState } from "react";

function useCountDownTimer() {
    const timer = useRef<null | NodeJS.Timeout | any>(null);
    // const [hourVal, setHourVal] = useState(0);
    // const [minutesVal, setMinutesVal] = useState(0);
    // const [secVal, setSecVal] = useState(0);

    const hourVal = useRef(0);
    const minutesVal = useRef(0);
    const secVal = useRef(0);

    function startTimer() {
        // let hourVal = hour !== "" ? parseInt(hour) : "";
        // let minutesVal = minutes !== "" ? parseInt(minutes) : "";
        // let secVal = seconds !== "" ? parseInt(seconds): "";
        console.log(secVal);
        console.log(minutesVal);
        if (hourVal.current == 0 && minutesVal.current == 0 && secVal.current == 0) {
        //   startBtn.style.display = 'block';
        //   stopBtn.style.display = 'none';
          clearInterval(timer.current);
        } else if (secVal.current != 0) {
            secVal.current = secVal.current - 1;
            // setSecVal(prev => prev - 1);
        } else if (minutesVal.current != 0 && secVal.current === 0) {
            // setSecVal(59);
            // setMinutesVal(prev => prev - 1);
            secVal.current = 59
            minutesVal.current -= 1
        } else if (hourVal.current != 0 && minutesVal.current == 0) {
            // setMinutesVal(60);
            // setHourVal(prev => prev - 1);
            minutesVal.current = 60;
            hourVal.current -= 1;
        }
      }

    function onClickStart() {
        timer.current = setInterval(() => {
            startTimer();
        }, 1000)
    }

    return {
        hourVal,
        minutesVal,
        secVal,
        // setHourVal,
        // setMinutesVal,
        // setSecVal,
        onClickStart
    }
}

export { useCountDownTimer };