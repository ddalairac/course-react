import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridCard } from './GifGridCard';


export const GifGrid = ({ category, index }) => {
    const [images, setImages] = useState([])

    async function getGif(search = "back to the future") {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=NDn6Ja2MjEzXJ8sgiiKCw8UXqS82GV9G&q=${search}&limit=5`;
        const resp = await fetch(url)
            .then((res) => { return res.json() })
            .catch(err => { console.log("getGif err", err) })

        const { data } = resp
        // console.log("getGif resp", resp)
        // console.log("getGif data", data)
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // console.log("gifs", gifs)
        setImages(gifs)
        // return gifs
    }

    useEffect(() => {
        getGif(category)
    }, [])

    return (
        <>
            <li >
                <h2>{category} </h2>
                <div className="container-flex">
                    {images.map((img) => {
                        return <GifGridCard img={img} key={img.id}/> 
                        // <div className="card" key={id}>
                        //     <p>{title}</p>
                        //     <img id={id} src={url} alt={title}></img>
                        // </div>
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
