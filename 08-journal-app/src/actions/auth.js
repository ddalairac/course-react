import { types } from "../types/types"
import { firebase, googleAuhtProvider } from "../firebase/firebase-config"
import { loadingFinishAction, loadingStartAction, setErrorAction } from "./ui";
import { cleanNotesAction } from "./notes";
import { errorHandler } from "../helpers/errorHandler";


// Midlewares 
export const startLoginMW = (email, password) => {
    return async(dispatch) => {
        dispatch(loadingStartAction())
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(loadingFinishAction())
            dispatch(loginMW(userCredential))
        } catch (error) {
            const { message } = error
            if (message) dispatch(setErrorAction(message))
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}

export const startGoogleLoginMW = () => {
    return async (dispatch) => {
        dispatch(loadingStartAction())
        try {
            const userCredential = await firebase.auth().signInWithPopup(googleAuhtProvider)
            dispatch(loginMW(userCredential))
        } catch (error) {
            const { message } = error
            if (message) dispatch(setErrorAction(message))
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}

export const startRegisterWhithNameEmailPassMW = (fullname, email, password) => {
    return async(dispatch) => {
        dispatch(loadingStartAction())
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const { user } = userCredential;
            // loging con google trae display name, con email no. En ese caso se agrega despues de crear el usuario
            if (!user.displayName) await user.updateProfile({ displayName: fullname })
            dispatch(loginMW(userCredential))
        } catch (error) {
            const { message } = error
            if (message) dispatch(setErrorAction(message))

        } finally {
            dispatch(loadingFinishAction())
        }
    }
}
export const loginMW = (userCredential) => {
    return (dispatch) => {
        const { user } = userCredential;
        const { displayName, uid } = user;
        if (displayName && uid) {
            dispatch(loginAction(uid, displayName))
        } else {
            dispatch(setErrorAction('No se pudo obtener el uid o el displayName'))
        }
    }
}

export const startlogoutMW = () => {
    return async (dispatch) => {
        dispatch(loadingStartAction())
        try {
            await firebase.auth().signOut();
            dispatch(logoutAction())
            dispatch(cleanNotesAction())
        } catch (error) {
            errorHandler(error, 'startlogoutMW')
        } finally {
            dispatch(loadingFinishAction())
        }
    }
}
// actions
export const loginAction = (uid, displayName) => {
    return {
        type: types.login,
        payload: { uid, displayName }
    }
}
export const logoutAction = () => {
    return {
        type: types.logout,
        payload: {}
    }
}