import React, { useEffect, useState } from "react";

function getLocalStorage(initial, key) {
  const value = JSON.parse(localStorage.getItem(key));
  if (value) {
    return value;
  }

  if (initial instanceof Function) return initial();
  return initial;
}

export default function useLocalStorage(initial, key) {
  const [state, setState] = useState(() => {
    return getLocalStorage(initial, key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
