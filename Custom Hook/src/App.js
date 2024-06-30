// import { useState, useEffect } from "react";

import useFetch from "./useFetch";

function App(){
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((r) => r.json())
    //   .then((d) => setData(d));
    // })

    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return(
      <>
      {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
      </>
    )
}
export default App;
