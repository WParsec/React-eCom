import { useState, useEffect } from "react";

export function useAPI(url) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [url]);

    return [data, isLoading, isError];
}

export default useAPI;