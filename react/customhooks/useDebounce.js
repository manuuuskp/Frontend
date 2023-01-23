import { useEffect } from "react";
import useTimeout from "./useTimeOut";

export default function useDebounce(callbackFn, delay, dependencies) {
  const { reset, clear } = useTimeout(callbackFn, delay);

  useEffect(() => {
    reset();
  }, [...dependencies]);

  useEffect(() => {
    clear();
  }, []);
}
