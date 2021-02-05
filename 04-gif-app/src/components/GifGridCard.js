import React from 'react'

export const GifGridCard = ({ img }) => {
    const { url, title } = img;
    return <div className="card" >
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
}


