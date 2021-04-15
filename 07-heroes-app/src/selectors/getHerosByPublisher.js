import { heroes } from "../mocks/herosMock";


export const getHerosByPublisher = (publisher = "") => {
    console.log(publisher)
    const validPublishers = ['DC Comics', 'Marvel Comics']
    
    if(publisher && !validPublishers.includes(publisher)){
        throw new Error(`Publisher ${publisher} no valido`)
    }
    if(!publisher) return heroes
    return heroes.filter(hero=>hero.publisher === publisher)
}
