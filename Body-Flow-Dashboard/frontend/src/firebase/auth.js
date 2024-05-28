import { auth } from "./firebase-config";

import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, updatePassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
} 

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
} 

export const doSignInWithGoogle = async (email, password) => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
} 

export const doSignOut = async (email, password) => {
    return auth.signOut()
} 

// export const doPasswordReset = async (email) => {
//     return sendPasswordResetEmail(auth, email)
// } 

// export const doPasswordChange = async (password) => {
//     return updatePassword(auth.currentUser, password)
// } 

// export const doSendEmailVerification = async () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`
//     })
// } 

