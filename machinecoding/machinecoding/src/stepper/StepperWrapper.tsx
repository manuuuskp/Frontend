import React from "react";
import Stepper from "./Stepper";

const StepperWrapper = () => {
  return (
    <Stepper>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </Stepper>
  );
};

const Example1 = ({
  onNext,
  onPrev,
}: {
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  return (
    <>
      <h1>Example 1</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </>
  );
};
const Example2 = ({
  onNext,
  onPrev,
}: {
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  return (
    <>
      <h1>Example 2</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </>
  );
};
const Example3 = ({
  onNext,
  onPrev,
}: {
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  return (
    <>
      <h1>Example 3</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </>
  );
};
const Example4 = ({
  onNext,
  onPrev,
}: {
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  return (
    <>
      <h1>Example 4</h1>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </>
  );
};

export default StepperWrapper;
