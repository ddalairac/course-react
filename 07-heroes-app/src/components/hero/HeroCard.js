import React from 'react'
import { Link } from 'react-router-dom'
import { imgpath } from '../../helpers/imgpath'

export const HeroCard = ({ hero }) => {
    const {
        id,
        superhero,
        // publisher,
        alter_ego,
        // first_appearance,
        // characters
    } = hero
    // console.log("imgpath",imgpath(`./${id}.jpg`).default)
    return (
        <div className="card ms-3  animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-lg-4">
                    <img src={imgpath(`./${id}.jpg`).default} className="card-img" alt={superhero} />
                </div>
                <div className="col-lg-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/* <p className="card-text">
                            first_appearance: {first_appearance}<br />
                            { (alter_ego !== characters) && "alter_ego: "+alter_ego}<br />
                            characters: {characters}<br />
                        </p> */}
                        <Link to={`./hero/${id}`} className="btn btn-outline-primary">Mas...</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
