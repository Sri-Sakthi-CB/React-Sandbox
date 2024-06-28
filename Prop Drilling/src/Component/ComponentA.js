import ComponentB from "./ComponentB";

const ComponentA = ({name}) => {

    return(
        <>
        <h3>This is ComponentA</h3>
        <ComponentB name = {name} />
        </>
    )
}
export default ComponentA;
