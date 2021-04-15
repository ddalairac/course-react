import { heroes } from "../mocks/herosMock";


export const getHerosById = (id) => {
    return heroes.find(hero=>hero.id === id)
}
