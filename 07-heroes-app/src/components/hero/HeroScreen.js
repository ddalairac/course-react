import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { imgpath } from '../../helpers/imgpath';
import { getHerosById } from '../../selectors/getHerosById';

export const HeroScreen = ({history}) => {
    const params = useParams()
    console.log(params) 
    const { heroId } = params
    // const hero = getHerosById(heroId)
    const hero = useMemo(() => getHerosById(heroId), [heroId]) 
    // console.log(hero)
    if (!hero) {
        return <Redirect to="/" />
    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    function handleReturn(){
        if(history.length <= 2){
            history.push("./")
        }
        history.goBack()
    }

    return (
        <>
            <h2>Heros Screen</h2>
            <hr />
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imgpath(`./${id}.jpg`).default} className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="">{superhero}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>publisher: </b> {publisher}</li>
                            <li className="list-group-item"><b>first_appearance: </b>{first_appearance}</li>                            
                            <li className="list-group-item"><b>alter_ego: </b>{alter_ego}</li>                            
                            <li className="list-group-item"><b>characters: </b>{characters}</li>
                        </ul>
                        <button className="btn btn-outline-primary" onClick={handleReturn}>Return</button>
                    </div>
                </div>
            </div>
        </>
    )
}
