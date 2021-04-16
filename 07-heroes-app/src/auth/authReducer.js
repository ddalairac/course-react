import { types } from "../types/types";

export const authReducer = (state = {}, action = { payload: {}, type: '' }) => {
    if (!action || !action.type) {
        return state
    }
    switch (action.type) {
        case types.login:
            let state = {
                ...action.payload,
                logged: true
            }
            return state
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}
