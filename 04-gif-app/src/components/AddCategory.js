import React, { useState }  from 'react'

export const AddCategory = () => {
    const [inputValue, setValue] = useState('')

    function handleInputChange(newValue){
        console.log(newValue)
        setValue(newValue)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Submit input categoria")

    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" onClick={handleSubmit}>Agregar</button>
            <input 
                type="text" 
                value={inputValue} 
                onChange={e=>{
                    handleInputChange(e.target.value)
                }}
            />
        </form>
    )
}
