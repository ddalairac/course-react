import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
    const {
        id,
        superhero,
        // publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero
    
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-lg-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-lg-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">
                            {/* <b>publisher: </b> {publisher} */}
                            first_appearance: {first_appearance}<br />
                            { (alter_ego !== characters) && "alter_ego: "+alter_ego}<br />
                            characters: {characters}<br />
                            <Link to={`./hero/${id}`} className="btn btn-primary">Mas...</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
