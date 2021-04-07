import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const initialState = {
        data: null,
        loading: true,
        error: null
    }
    const [state, setstate] = useState(initialState)

    useEffect(() => {
        setstate({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => {
                // console.log("resp", resp);
                return resp.json();
            })
            .then(data => {
                // console.log("data", data);
                setstate({
                    loading: false,
                    error: null,
                    data: data
                })
            })

    }, [url])

    return state
}
