import { useState, useEffect } from "react";
import { client } from '../utils/sanity';

const useFetchSanity = (payLoad: string) => {

    const [data, setData] = useState();

    useEffect(() => {
        client
            .fetch(payLoad)
            .then((data) => {
                setData(data);
            })
            .catch(console.error);
    }, [payLoad]);

    return [data];
};

export default useFetchSanity;
