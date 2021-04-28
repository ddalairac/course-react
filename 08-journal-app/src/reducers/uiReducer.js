import { types } from "../types/types"

const initialState = {
    loading: false,
    msjError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msjError: action.payload,
            }

        case types.uiRmoveError:
            return {
                ...state,
                msjError: null
            }
        case types.uiLoadingStart:
            return {
                ...state,
                loading: true
            }
        case types.uiLoadingFinish:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}
