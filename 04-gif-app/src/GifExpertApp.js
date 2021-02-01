import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    // Esto no va a funcionar, porque no lo va a reconocer react 
    // const categories = ['Fantasia','Ciencia Ficcion','Historico'] 
    
    const [categories, setCategories] = useState(['Fantasia', 'Ciencia Ficcion', 'Historico'])
    function handleAdd(value) {
        // setCategories([...categories, 'Documental'])
        // setCategories(cats=>[...cats, 'Documental'])
        setCategories([...categories, value])
        console.log(categories)
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory handleAdd={handleAdd}/>
            <ol>{
                    categories.map((cat, i) => {
                        return <li key={'cat' + i}>{cat}</li>
                    })
                }
            </ol>

        </>
    )
}
