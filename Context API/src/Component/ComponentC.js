import {Data} from "../App.js";

function ComponentC(){

    return(
        <>
        <Data.Consumer>
            {(name) => {
                return <h1>My name is: {name}</h1>
            }}
        </Data.Consumer>
        </>
    )
}
export default ComponentC;