// encapsulate all the children
import { useContext, useEffect, useState } from "react"
import { auth } from "../../firebase/firebase-config"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext()

export default function useAuth() {
    return useContext(AuthContext)
}
// component for auth provider
export default function AuthProvider({ children }) {
    //when user logs in, we are setting their data into this state
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    }, [])
    async function initializeUser(user){
        if(user) {
            setCurrentUser({...user})
            setUserLoggedIn(true)
        } else {
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}