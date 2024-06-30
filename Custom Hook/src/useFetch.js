import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((d) => setData(d));
    },[url]);

    return [data];

}
export default useFetch;
