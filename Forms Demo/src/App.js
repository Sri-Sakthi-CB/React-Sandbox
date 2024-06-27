import { useState } from "react";

function App(){
  const[username, setUsername] = useState("");

  const handleChange = (event) => 
    {
      setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`You Entered: ${username}`);
      setUsername("");
    }

  return(
  <>
  <h1>Enter Username</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={handleChange}></input>
    <button type="submit">Submit</button>
  </form>
  </>
  )
}

export default App;
