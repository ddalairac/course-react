import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { heroes } from '../../mocks/herosMock'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = ({ history }) => {
    const location = useLocation()
    const queryString = require('query-string');
    const { h = '' } = queryString.parse(location.search)

    const [filteredHeros, setfilteredHeros] = useState(heroes)
    const [{ search }, handleInputChange] = useForm({ search: h })

    const handleSearch = (e) => {
        e.preventDefault()
        // no hace la busqueda, lo manda a la URL
        history.push(`?h=${search}`)
    }

    // si el parametro de la url cambia, hace la busqueda
    useMemo(() =>
        setfilteredHeros(getHeroByName(h)),
        [h]
    )
    return (
        <>
            <br />
            <div className="row align-items-center">
                <div className="col-auto mr-auto"><h1>Heros search</h1></div>
                <div className="col-auto align-self-end">
                    <form onSubmit={handleSearch} className="form-inline">
                        <input
                            type="text"
                            placeholder="Find your hero"
                            autoComplete="off"
                            className="form-control"
                            name="search"
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary" >Buscar</button>
                    </form>
                </div>
            </div>
            <hr />

            { (h === '') &&
                <div className="alert alert-info">Busca un heroe ('all' para ver la lista completa)</div>
            }
            { (filteredHeros.length === 0 && h !== '') &&
                <div className="alert alert-danger">No hay resultados para la busqueda "{h}"</div>
            }

            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        {
                            filteredHeros.map(hero => (
                                <HeroCard key={hero.id} hero={hero} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
