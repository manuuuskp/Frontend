// Higher Order Component are functions that get a component as a prop and returns the component which added
// functionality.
// Ths purpose of a HOC is that if multiple component needs same functional upgrade then HOC will be useful.

// NOTE: the props received in this component are from HOC.
// name prop is from Parent Component.
// height and width props are from HOC.

const Component = ({ name, height, width }, ref) => {
  return (
    <div className="comp" ref={ref}>
      <h1>This is a Component</h1>
      <h1>my name is {name}</h1>
      <h1>my height is {height}</h1>
      <h1>my width is {width}</h1>
    </div>
  );
};

export default HOC(forwardRef(Component));

// This is a Higher Order Component which returns the component with Offset width and Offset height.
const HOC = (Component) => {
  return function NewComponent(props) {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const compRef = useRef();

    useEffect(() => {
      setHeight(compRef.current.offsetHeight);
      setWidth(compRef.current.offsetWidth);
    }, [compRef]);

    return <Component ref={compRef} width={width} height={height} {...props} />;
  };
};

export { HOC };
