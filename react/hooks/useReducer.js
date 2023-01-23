// useReducer is used to maintain the state.
// When we have a complex state logic and many actions that triggers the state update then we can
// opt for useReducer.

import { useReducer } from "react";

const initialstate = {
  count: 0,
};

function reducerFn(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducerFn, initialstate);
  return (
    <>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
};

export default Counter;
