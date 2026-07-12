import { useEffect, useState } from "react";
import type { ProductCard } from "./ProductPreviewCard";



const useFetch = (() => {

    const [product, setProduct] = useState<ProductCard[]>([]);
    const [isLoading, setLoading] = useState(true); // For notifying the user that the data is loading.
    const [error, setError] = useState(null); // For notifying the user that there is and error with the data.

    useEffect(() => {

        const abortCont = new AbortController();

        fetch("/data/data.json", {signal: abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("App.tsx: json file error.");
                }
                return response.json();

            }).then(data => {
                setLoading(false);
                setError(null);
                setProduct(data);
                console.log('App.tsx: json loaded');
            }

            )
            .catch((err) => {
                setLoading(false);
                setError(err.message);
                console.error('App.tsx: Error loading data: ', err)
            });

            return () => abortCont.abort(); // Abort the fetch
    }, []);



    return { product, isLoading, error }
}
)

export default useFetch;