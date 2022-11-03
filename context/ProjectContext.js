import {createContext, useContext, useEffect, useState} from "react"
import { db } from "../firebase/firebaseConfig"
import {query, collection, onSnapshot, addDoc} from "firebase/firestore"

const ProjectContext = createContext()

export const ProjectContextProvider = ({children}) => {

    const [projects, setProjects] = useState([])

    // Create project

    const CreateProject = (input) => {
        return addDoc(collection(db, "projects"), input)
    }

    // Read project from firebase

    useEffect(() => {
        const q = query(collection(db, "projects"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let projectArr = []
        querySnapshot.forEach((doc) => {
            projectArr.push({...doc.data(), id: doc.id})
        })
        setProjects(projectArr)
        })
        return () => unsubscribe
    },[])

    

    // Update project in firebase

    // Delete project


    return (
        <ProjectContext.Provider value={{projects, CreateProject}}>
            {children}
        </ProjectContext.Provider>
    )
}

export {ProjectContext}

// https://firebase.google.com/docs/database/web/lists-of-data
// https://cloud.google.com/firestore/docs/samples/firestore-data-set-id-random-document-ref
