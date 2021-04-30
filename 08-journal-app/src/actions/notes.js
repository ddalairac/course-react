import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"
import { loadingFinishAction, loadingStartAction } from "./ui"

export const startNewNoteMW = () => {
    return async (dispatch, getState) => {
        dispatch(loadingStartAction())
        const store = getState()
        const { uid } = store.auth
        // console.log("store in MW", store)
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        db.collection(`${uid}/journal/notes`).add(newNote)
            .then(doc=>{
                dispatch(loadingFinishAction())
                // console.log("doc",doc,doc.id, newNote)
                dispatch(activeNoteAction(doc.id, newNote))
            })
            .catch(error => {
                dispatch(loadingFinishAction())
                const { message } = error
                console.warn("startNewNoteMW Error: ", message, error)
            })
    }
}

export const startLoadingNotesMW = (uid) => {
    return async (dispatch)=>{
        const notes = await loadNotes(uid)
        dispatch(setNoteAction(notes))
    }
}


export const activeNoteAction = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})
export const setNoteAction = (notes) => ({
    type: types.notesLoad,
    payload: notes
})