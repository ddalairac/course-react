import React, { useState } from 'react'
import PropTypes from 'prop-types'

// export const AddCategory = (props) => {
export const AddCategory = ({handleAdd}) => {
    const [inputValue, setValue] = useState('')

    function handleInputChange(newValue) {
        console.log(newValue)
        setValue(newValue)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            console.log("Submit input categoria")
            // props.handleAdd(inputValue)
            handleAdd(inputValue)
            setValue('') // reset
        } else{
            console.log("el input no puede estar vacio")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" onClick={handleSubmit}>Agregar</button>
            <input
                type="text"
                value={inputValue}
                onChange={e => {
                    handleInputChange(e.target.value)
                }}
            />
        </form>
    )
}


AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired
}