// Render props is a design pattern in React in which functions will be passed as a props
// which will render(return) a JSX.
// This pattern is used widely in many libraries and it is used in the cases where we dont want
// to change the base component.
// Instead we can pass the required JSX as a function via props.

export default Component1 = () => {
  const [value, setValue] = useState("");

  const renderPropFunction = () => (
    <span>
      <b>This is a bold title {value}</b>
    </span>
  );
  const renderPropFunction1 = () => (
    <span>
      <i>This is a italic title {value}</i>
    </span>
  );

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <RenderPropComp subtitle={renderPropFunction} />
      <RenderPropComp subtitle={renderPropFunction1} />
    </>
  );
};

export const RenderPropComp = (props) => {
  return <>{props.subtitle()}</>;
};
