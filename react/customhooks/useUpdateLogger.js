import React, { useEffect, useState } from "react";

export default function useUpdateLogger(initial) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return [state, setState];
}
