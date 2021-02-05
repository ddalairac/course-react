import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // Esto no va a funcionar, porque no lo va a reconocer react 
    // const categories = ['Fantasia','Ciencia Ficcion','Historico'] 

    // const [categories, setCategories] = useState(['Fantasia', 'Ciencia Ficcion', 'Historico'])
    const [categories, setCategories] = useState(['Back to the future', 'star wars', 'scarlett johansson'])
    function handleAdd(value) {
        // setCategories([...categories, 'Documental'])
        // setCategories(cats=>[...cats, 'Documental'])
        setCategories([value, ...categories])
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory handleAdd={handleAdd} />
            <ol>{
                categories.map((cat, i) => {
                    return <GifGrid key={cat + i} category={cat} index={i} />
                })
            }
            </ol>

        </>
    )
}
