import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridCard } from './GifGridCard';
import { getGif } from '../herpers/getGif';


export const GifGrid = ({ category, index }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getGif(category).then((gifs) => {
            setImages(gifs)
        })
    }, [category])

    return (
        <>
            <li >
                <h2>{category} </h2>
                <div className="container-flex">
                    {images.map((img) => {
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
