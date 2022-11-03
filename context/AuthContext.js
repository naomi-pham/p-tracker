import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import {auth} from "../firebase/firebaseConfig"


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })   
        return () => {
            unsubscribe()
        }
    }, [])

    // console.log(user)
    // email, uid, displayname

    return (
        <UserContext.Provider value={{createUser, user,logout, signin}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext}

// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0