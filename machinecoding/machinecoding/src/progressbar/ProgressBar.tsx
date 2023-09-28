import classes from "./ProgressBar.module.css";

const ProgressBar = ({completeStatus}:Props) => {
    return (
        <>
            <h1>Progressbar</h1>
            <div className={classes.progress__wrapper}>
                <div className={classes.progress__fill} style={{transform: `translateX(calc(${completeStatus}% - 100%))`}}>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;

interface Props {
    completeStatus: number
}