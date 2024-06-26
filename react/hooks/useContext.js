// useContext hook is used to avoid the prop drilling.
// for useContext hook there should be one argument contextprovider name.
// Inorder to get the context value there should be a provider.

const nameCtx = React.createContext("name - initialValue");
function App() {
  return (
    <>
      <nameCtx.Provider value="mano">
        <Parent />
      </nameCtx.Provider>
    </>
  );
}
export { nameCtx };
export { App };

// ====================================================================

import { nameCtx } from "./../App";

const Childtwo = () => {
  const name = useContext(nameCtx);
  return <h1>This is a Childtwo and my name is {name}</h1>;
};

export default Childtwo;


// 1.Context will not work if you provide and useContext in the same level of component.
// for a context should work there should be some provider in the parent level and not in the same level.
// 2.If there are no providers in the parent level then default provider value will be taken from the place where
// React.createContext(default value) is used.

// important - Context is not a state. it just teleports data to its children no matter how deep it is.