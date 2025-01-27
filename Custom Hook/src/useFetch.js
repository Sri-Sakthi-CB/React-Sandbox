import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(url){
        fetch(url)
        .then((r) => r.json())
        .then((d) => setData(d));
        }
    },[url]);

    return [data];

}
export default useFetch;
