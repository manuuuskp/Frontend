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
