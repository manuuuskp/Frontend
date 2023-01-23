import { useEffect, useRef } from "react";

export default function useUpdateEffect(callbackFn, ...dependencies) {
  const updateRef = useRef(true);

  useEffect(() => {
    if (updateRef.current) {
      updateRef.current = false;
      return;
    }
    return callbackFn();
  }, dependencies);
}
