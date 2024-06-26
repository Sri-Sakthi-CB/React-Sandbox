import { useState } from "react";

function App(){
    const[movie,  setMovie] = useState({
      title: "Stranger Things",
      Rating: 8,
    });

    function handleClick(){
        setMovie({...movie, Rating: 5});

    }

    return(
      <>
      <h1>{movie.title}</h1>
      <h3>Ratings: {movie.Rating}</h3>
      <button onClick={handleClick}>Change Rating</button>
      </>
    )

}
export default App;