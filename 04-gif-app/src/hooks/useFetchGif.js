import { useEffect, useState } from "react"
import { getGif } from "../herpers/getGif"

export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    // Para que solo se ejecuta una vez
    useEffect(() => { 
        // setTimeout(() => {
            getGif(category).then((gifs) => {
                console.log("category", category, gifs)
                setstate({ 
                    data: gifs, 
                    loading: false 
                })
            })
        // }, 3000);
    }, [category]) /* dependencia, si cambia category se ejecuta de nuevo */

    return state
}