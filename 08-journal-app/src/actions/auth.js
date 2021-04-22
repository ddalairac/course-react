import { types } from "../types/types"


export const loginAction = (uid, displayName) => {
    return {
        type: types.login,
        payload: { uid, displayName }
    }
}