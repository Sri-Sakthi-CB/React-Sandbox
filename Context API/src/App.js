import ComponentC from "./Component/ComponentC.js";
import { createContext } from "react";

export const Data = createContext();

function App(){
    const name = "Sri Sakthi!";

    return(
      <>
      <Data.Provider value={name}>
        <ComponentC />
      </Data.Provider>
      </>
    )
}
export default App;
