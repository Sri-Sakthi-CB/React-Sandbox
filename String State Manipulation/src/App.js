import { useState } from "react";


export default function App(){

  const [name, setName] = useState("Unknown");
  function changeHandler(){
    setName("Sakthi!!!");
  }
  return(
    <>
    <h1>{name}</h1>
    <button onClick={changeHandler}>Change Name</button>
    </>
  )
}