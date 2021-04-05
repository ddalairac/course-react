import React from 'react'

export const GifGridCard = ({ img }) => {
    const { url, title } = img;
    return <div className="card animate__animated animate__flipInX" >
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
}


