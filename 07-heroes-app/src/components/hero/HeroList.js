import React, { useMemo } from 'react';
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = React.memo(({ publisher }) => {
    // console.log(publisher)
    // const heros = getHerosByPublisher(publisher)
    const heros = useMemo(() => getHerosByPublisher(publisher), [publisher])
    // console.log("heros", heros)
    return (
        <>
            {/* <pre>{JSON.stringify(heros, null, 3)}</pre> */}
            <ul className="card-columns">
                {
                    heros.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))
                }
            </ul>
        </>
    )
}
)