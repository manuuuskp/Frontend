// This hook is used to send the previous value.

const usePrevious = (value) => {
  valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};

export default usePrevious;
