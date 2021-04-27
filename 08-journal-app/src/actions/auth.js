import { types } from "../types/types"
import { firebase, googleAuhtProvider } from "../firebase/firebase-config"

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
                    console.error("startGoogleLoginMW: No se pudo obtener el uid o el displayName")
                }
            })
            .catch(error=>console.error("startGoogleLoginMW: ",error))
    }
}

export const loginAction = (uid, displayName) => {
    return {
        type: types.login,
        payload: { uid, displayName }
    }
}