import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const reset = () => {
        setValues(initialState)
    }
    const handleInputChange = (e) => {
        let { target } = e
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset]
}
