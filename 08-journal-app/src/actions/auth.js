import { types } from "../types/types"
import { firebase, googleAuhtProvider } from "../firebase/firebase-config"
import { loadingFinishAction, loadingStartAction, setErrorAction } from "./ui";


// Midlewares 
export const startLoginMW = (email, password) => {
    return (dispatch) => {
        dispatch(loadingStartAction())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                dispatch(loadingFinishAction())
                dispatch(loginMW(userCredential))
            })
            .catch(error => {
                dispatch(loadingFinishAction())
                console.warn("startLoginMW Error: ", error)
                const { message } = error
                if (message) dispatch(setErrorAction(message))
            })
    }
}

export const startGoogleLoginMW = () => {
    return (dispatch) => {
        dispatch(loadingStartAction())
        firebase.auth().signInWithPopup(googleAuhtProvider)
            .then(userCredential => {
                dispatch(loadingFinishAction())
                dispatch(loginMW(userCredential))
            })
            .catch(error => {
                dispatch(loadingFinishAction())
                console.warn("startGoogleLoginMW Error: ", error)
                const { message } = error
                if (message) dispatch(setErrorAction(message))
            })
    }
}

export const startRegisterWhithNameEmailPassMW = (fullname, email, password) => {
    return (dispatch) => {
        dispatch(loadingStartAction())
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                const { user } = userCredential;
                if (!user.displayName) await user.updateProfile({ displayName: fullname })
                dispatch(loadingFinishAction())
                dispatch(loginMW(userCredential))
            })
            .catch(error => {
                dispatch(loadingFinishAction())
                console.warn("startRegisterWhithNameEmailPassMW Error: ", error)
                const { message } = error
                if (message) dispatch(setErrorAction(message))
            })
    }
}
export const loginMW = (userCredential) => {
    return (dispatch) => {
        // console.log("userCredential: ",userCredential)
        const { user } = userCredential;
        const { displayName, uid } = user;
        if (displayName && uid) {
            dispatch(loginAction(uid, displayName))
        } else {
            console.warn("loginAction Error: No se pudo obtener el uid o el displayName")
            dispatch(setErrorAction('No se pudo obtener el uid o el displayName'))
        }
    }
}

export const startlogoutMW = () => {
    return async (dispatch)=>{
        dispatch(loadingStartAction())
        await firebase.auth().signOut();
        dispatch(loadingFinishAction())
        dispatch(logoutAction())
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
        payload: { }
    }
}