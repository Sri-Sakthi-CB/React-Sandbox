import { useRef } from "react";

function App(){
  const inputValue = useRef(null);

  const focusInput = () => {
    inputValue.current.focus();
    inputValue.current.value = "Sri Sakthi!";
    
  }

  return(
    <>
    <input type="text" ref={inputValue} />
    <button onClick={() => focusInput()}>Focus & Wtite Name</button>
    </>
  )
}
export default App;
