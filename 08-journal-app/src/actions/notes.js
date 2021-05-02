import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config"
import { errorHandler } from '../helpers/errorHandler';
import { loadNotes } from "../helpers/loadNotes"
import { uploadFile } from "../helpers/uploadFile"
import { types } from "../types/types"
import { loadingFinishAction, loadingStartAction } from "./ui"

// Midlewares 
export const startNewNoteMW = () => {
    return async (dispatch, getState) => {
        dispatch(loadingStartAction())
        try {
            const { uid } = getState().auth
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
                url: ''
            }
            const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
            dispatch(addNewNoteAction(doc.id, newNote))
            dispatch(activeNoteAction(doc.id, newNote))
        } catch (error) {
            errorHandler(error, 'startNewNoteMW')
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}
export const startLoadingNotesMW = (uid) => {
    return async (dispatch) => {
        dispatch(loadingStartAction())
        try {
            const notes = await loadNotes(uid)
            dispatch(setSidebarNotesAction(notes))
        } catch (error) {
            errorHandler(error, 'startLoadingNotesMW')
        } finally {
            dispatch(loadingFinishAction())
        }

    }
}
export const startSaveNoteMW = () => {
    return async (dispatch, getState) => {
        dispatch(loadingStartAction())
        try {
            const { uid } = getState().auth;
            const { active: note } = getState().notes;

            const noteToFirestore = { ...note };
            delete noteToFirestore.id;
            if (!note.url) delete noteToFirestore.url;
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
            dispatch(updateNoteAction(note.id, noteToFirestore));
            Swal.fire({ icon: 'success', title: 'Image saved', text: '',showConfirmButton: false});
            setTimeout(() => { Swal.close(); }, 2000);
        } catch (error) {
            errorHandler(error, 'startSaveNoteMW')
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}
export const startDeleteNoteMW = (id) => {
    return async (dispatch, getState) => {
        dispatch(loadingStartAction())
        try {
            const { uid } = getState().auth
            await db.doc(`${uid}/journal/notes/${id}`).delete()
            dispatch(deleteNoteAction(id))            
            Swal.fire({ icon: 'success', title: 'Delete success', text: 'The note is bye bye',showConfirmButton: false});
            setTimeout(() => { Swal.close(); }, 2000);
        } catch (error) {
            errorHandler(error, 'startDeleteNoteMW')
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}
export const startUploadingMW = (file) => {
    return async (dispatch, getState) => {
        try {
            const { active: activeNote } = getState().notes;
    
            Swal.fire({
                title: 'Uploading...',
                text: 'Please wait...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            });
            const fileUrl = await uploadFile(file);
            activeNote.url = fileUrl;
            dispatch(startSaveNoteMW(activeNote))

        } catch (error) {
            errorHandler(error, 'startUploadingMW')
        } finally {
            Swal.close();
        }
    }
}


// actions
export const addNewNoteAction = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})
export const activeNoteAction = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})
export const setSidebarNotesAction = (notes) => ({
    type: types.notesLoad,
    payload: notes
})
export const deleteNoteAction = (id) => ({
    type: types.noteDelete,
    payload: id
})
export const updateNoteAction = (id, note) => ({
    type: types.noteUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});
export const cleanNotesAction = () => ({
    type: types.notesLogoutClean,
    payload: {}
});
