import { useState } from "react";

function App(){
      const [frnd, setFrnd] = useState(['Alex','John']);
      function Add(){
        setFrnd([...frnd, "Sakthi"]);
      }

      const Delete = () => {
        setFrnd(frnd.filter((f) => f !== "John"));
      }
      

        const Update = () => {
          setFrnd(frnd.map((f) => f === 'Alex' ? "Alex Smith" : f));
        }
  
      return(
        <>
        <ul>
        {frnd.map((frd => (
          <li key={Math.random()}>{frd}</li>
        )))}

        </ul>
        <button onClick={Add}>Add One</button>
        <button onClick={Delete}>Delete One</button>
        <button onClick={Update}>Update One</button>
        </>
      )
}
export default App;
