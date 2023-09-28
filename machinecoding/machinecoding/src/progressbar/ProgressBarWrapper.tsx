import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar"

const ProgressBarWrapper = () =>{
    const totalTimer = 10 * 1000;
    const interval = 1 * 1000;
    const totalCycles = totalTimer / interval;
    const percentOnEachStroke = (interval / totalTimer) * 100;
    const cyclesCompleted = useRef(0);
    const timerRef = useRef<any>(0);
    const [progressMade, setProgressMade] = useState(0);
    
    useEffect(() => {
        timerRef.current = setInterval(() => {
            cyclesCompleted.current += 1;
            setProgressMade(prev => prev + percentOnEachStroke);
            if(totalCycles === cyclesCompleted.current) clearTimeout(timerRef.current);
        }, interval);

        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <ProgressBar completeStatus={progressMade} />
    )
}

export default ProgressBarWrapper