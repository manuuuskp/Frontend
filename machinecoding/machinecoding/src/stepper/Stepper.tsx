import React, { useState } from "react";
import "./stepper.css";

const Stepper = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children);
  const childrenElements = childrenArray.filter((child) =>
    React.isValidElement(child)
  );

  const [stepperState, setStepperState] = useState<{
    count: number;
    active: number;
    skipped: number[];
    completed: number[];
  }>({
    count: React.Children.count(children),
    active: 1,
    skipped: [],
    completed: [],
  });

  const progressLineWidth =
    (100 / (childrenArray.length - 1)) * stepperState.active;

  const handleStepItemClick = (idx: number) => {
    setStepperState((prev) => ({ ...prev, active: idx }));
  };

  const onNext = () => {
    if (stepperState.active < childrenArray.length - 1) {
      setStepperState((prev) => ({ ...prev, active: prev.active + 1 }));
    }
  };

  const onPrev = () => {
    if (stepperState.active > 0) {
      setStepperState((prev) => ({ ...prev, active: prev.active - 1 }));
    }
  };

  const getValidReactElement = (
    node: React.ReactNode
  ): React.ReactElement | null => {
    if (React.isValidElement(node)) {
      return node;
    }
    return null;
  };

  return (
    <>
      <div className={"step__container"}>
        <div className="step__wrapper">
          {Array.from({ length: React.Children.count(children) }).map(
            (_, idx) => (
              <div
                key={idx}
                className={`step__item ${
                  idx <= stepperState.active &&
                  !stepperState.skipped.includes(1)
                    ? "active"
                    : ""
                }`}
                onClick={() => handleStepItemClick(idx)}
              >
                {idx + 1}
              </div>
            )
          )}
        </div>
        <div
          style={{ width: `${progressLineWidth}%` }}
          className="step__connector"
        ></div>
      </div>
      <div>
        {React.cloneElement(childrenElements[stepperState.active], {
          onNext,
          onPrev,
        })}
      </div>
    </>
  );
};

export default Stepper;
