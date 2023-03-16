import { useState, useEffect } from "react";

export const useFetch = ( callbackFunction, prop = null, dependence = [] ) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        callbackFunction(controller, prop )
            .then((response) => {
                setData(response)
                setLoading(false)
            })
            .catch((error) => {

                setError(error.message)
            })


        return () => {
            if (controller)
                controller.abort();
        }

    }, dependence)

    return { data, loading, error }
}
