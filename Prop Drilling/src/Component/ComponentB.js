import ComponentC from "./ComponentC"

const ComponentB = ({name}) => {
    return(

        <>
        <h3>This is ComponentB</h3>
        <ComponentC name = {name} />
        </>
    )
}
export default ComponentB;