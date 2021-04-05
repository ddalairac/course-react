import React from 'react'
// import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridCard } from './GifGridCard';
// import { getGif } from '../herpers/getGif';
import { useFetchGif } from '../hooks/useFetchGif';


export const GifGrid = ({ category, index }) => {
    // const [images, setImages] = useState([])
    const { data, loading } = useFetchGif(category)

    console.log("data loading", data, loading)
    // useEffect(() => {
    //     getGif(category).then((gifs) => {
    //         setImages(gifs)
    //     })
    // }, [category])

    return (
        <>
            <li >
                <h2>{category} </h2>
                {/* {loading ? "cargando" : "Data cargada"} */}
                {loading && <p>Loading...</p>} {/* Como no hay un else, en este caso se puede usar && en lugar del ternario */} 

                <div className="container-flex">
                    {data.map((img) => {
                        return <GifGridCard img={img} key={img.id} />
                    })}
                </div>
            </li>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}
