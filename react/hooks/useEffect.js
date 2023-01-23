// useEffect is to perform any sideeffects.
// few methods in class components can be achieved using thhis hook in functional component.

useEffect(() => {
  // do any action
  return () => {
    //do any action that will be equivalent to componentWillUnmount
  };
}, ["dependency array"]);

// A component may have multiple useEffect.
