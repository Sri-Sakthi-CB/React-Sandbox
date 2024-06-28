import { createContext } from "react";
import ComponentC from "./Component/ComponentC";

export const Data = createContext();
export const Data1 = createContext();

function App(){
  const name = "Sri Sakthi";
  const age = 20;

  return(
    <>
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <ComponentC />
      </Data1.Provider>
    </Data.Provider>
    </>
  )
}
export default App;
