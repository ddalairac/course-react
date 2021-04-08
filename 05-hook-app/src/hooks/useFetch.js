import { useEffect, useState, useRef } from "react"


export const useFetch = (url) => {

    const initialState = {
        data: null,
        loading: true,
        error: null
    }
    const [state, setstate] = useState(initialState)
    const isMountedRef = useRef(true)

    // si el componente esta desmontado
    useEffect(() => {
        return () => {
            isMountedRef.current = false
        }
    }, [])

    // si cambia la URL
    useEffect(() => {
        setstate({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                if (isMountedRef.current) { // si el componente esta montado cambiar estado
                    setstate({
                        loading: false,
                        error: null,
                        data: data
                    })
                } else {
                    console.log("Cambio de estado cancelado, por componente desmontado")
                }
            })

    }, [url])

    return state
}
