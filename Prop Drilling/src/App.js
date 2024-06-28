import ComponentA from "./Component/ComponentA.js";

function App(){
    const name = "Sri Sakthi!";

    return(
      <>
      <h1>Prop Drilling</h1>
      <h3>This is App Component</h3>
      <ComponentA name={name} />
      </>
    )
}
export default App;
