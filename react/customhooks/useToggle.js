import { useState } from "react";

export default function useToggle(defaultVal) {
  const [value, setValue] = useState(defaultVal);

  function toggleState(val) {
    setValue((prevVal) => {
      return typeof val === "boolean" ? val : !prevVal;
    });
  }

  return [value, toggleState];
}
