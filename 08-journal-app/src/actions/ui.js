import { types } from "../types/types";

export const setErrorAction = (err) => ({
    type: types.uiSetError,
    payload: err
})
export const removeErrorAction = () => ({
    type: types.uiRmoveError
})
export const loadingStartAction = () => ({
    type: types.uiLoadingStart,
})
export const loadingFinishAction = () => ({
    type: types.uiLoadingFinish,
})