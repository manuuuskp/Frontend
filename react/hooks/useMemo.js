// useMemo is used to memoize a value instead of a function as in case of useCallback.

import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

const ChildThree = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = useMemo(() => {
    return doubleTheNumber(number);
  }, [number]);

  const getNumber = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const changeColor = () => {
    setDark((prevState) => !prevState);
  };

  const style = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  function doubleTheNumber(number) {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={changeColor}>change color</button>
      <div style={style}>
        <List getNumber={getNumber} />
      </div>
      <div>{doubleNumber}</div>
    </>
  );
};

export default ChildThree;
