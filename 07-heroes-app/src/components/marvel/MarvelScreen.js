import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <>
           <h2>Marvel Screen</h2> 
           <hr/>
           
           <HeroList publisher='Marvel Comics'/>
        </>
    )
}
