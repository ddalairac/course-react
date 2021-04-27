import { types } from "../types/types"

/**
 * @param {} state 
 * @param {payload, type} action 
 * @returns state
 */
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid:action.payload.uid,
                fullname:action.payload.displayName
            }
            
        case types.logout:
            return {}
    
        default:
            return state
    }
}
