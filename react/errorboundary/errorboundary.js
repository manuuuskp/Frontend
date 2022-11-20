// react-error-boundary is a library which catches the error that is happened in the React components.
// this library provides ErrorBoundary component which will be wrapped around the component where the error should be
// catched. We can display the fallback component once the error is catched.

// Below is a small example of how an Error Boundary works.

// 1.ErrorBoundary component will have FallbackComponent as one of the props which is a function that render a JSX.
// basically works in render props pattern.
// 2.OnReset is another prop which will be utilised to reset the error.
// It is mapped to resetErrorBoundary prop in Fallback Component so that we can trigger the reset functionality.

function Fallback({ error, resetErrorBoundary }) {
  return (
    <>
      <h3>This is the error message - {error.message}</h3>
      <button onClick={resetErrorBoundary}>resetError</button>
    </>
  );
}

function Blast() {
  throw new Error("Boom and Im blasted...");
}

export default function ComponentOne() {
  const [explode, setExplode] = useState(false);

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => setExplode(false)}
    >
      <h1>Im a exploder</h1>
      {explode && <Blast />}
      <button onClick={() => setExplode(true)}>Click to explode</button>
    </ErrorBoundary>
  );
}
