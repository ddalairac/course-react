import { types } from "../types/types"

const initialState = {
    notes:[],
    active:null
}

export const notesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case types.noteAddNew:
            return {
                ...state
            }
        case types.noteActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.noteUpdated:
            return {
                ...state,
            }
        case types.noteFileUrl:
            return {
                ...state,
            }
        case types.noteDelete:
            return {
                ...state,
            }
        case types.noteLogoutClean:
            return {
                ...state,
            }
            
        default:
            return state
    }
}
