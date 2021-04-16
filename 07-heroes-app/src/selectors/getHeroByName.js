import { heroes } from "../mocks/herosMock";

export const getHeroByName = (str = '') => {
    // console.log("getHeroByName: ",str)
    if(str===''){
        return []
    }
    if(str==='all' || str==='todos'){
        return heroes
    }
    return heroes.filter(hero => (
        hero.superhero.toLocaleLowerCase().includes(str.toLocaleLowerCase())
        || hero.alter_ego.toLocaleLowerCase().includes(str.toLocaleLowerCase())
    ))
}

