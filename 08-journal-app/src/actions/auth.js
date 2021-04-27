import { types } from "../types/types"
import { firebase, googleAuhtProvider } from "../firebase/firebase-config"
import { setErrorAction } from "./ui";

export const startLoginMW = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(loginAction(123, 'pedro'))
        }, 3500);
    }
}

export const startGoogleLoginMW = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuhtProvider)
            .then(userCredential => {
                console.log(userCredential)
                const { user } = userCredential;
                const { displayName, uid } = user;
                if (displayName && uid) {
                    dispatch(loginAction(uid, displayName))
                } else {
                    console.info("startGoogleLoginMW: No se pudo obtener el uid o el displayName")
                }
            })
            .catch(error => console.info("startGoogleLoginMW: ", error))
    }
}

export const startRegisterWhithNameEmailPassMW = (fullname, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async (userCredential) => {
                console.log(userCredential)
                const { user } = userCredential;
                await user.updateProfile({displayName:fullname})
                const { displayName, uid } = user;
                if (displayName && uid) {
                    dispatch(loginAction(uid, displayName))
                } else {
                    console.info("startRegisterWhithNameEmailPassMW: No se pudo obtener el uid o el displayName")
                    dispatch(setErrorAction('No se pudo obtener el uid o el displayName'))
                }
            })
            .catch(error => {
                console.info("startRegisterWhithNameEmailPassMW: ", error)
                const { message } = error
                if (message) dispatch(setErrorAction(message))
            })
    }
}
export const loginAction = (uid, displayName) => {
    return {
        type: types.login,
        payload: { uid, displayName }
    }
}