import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { db } from "../../firebase/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import ProjectDetail from "../../components/projects/ProjectDetail"


const Project = () => {

    const [project, setProject] = useState({
        title: "",
        description: "",
        status: "",
        demoLink: "",
        sourceCode: "",
        technologies: "",
        progress: "",
    })

    // Get projectID
    const router = useRouter()
    const {slug} = router.query

    // Get project doc by ID (slug: project.id)
    const getProjectDoc = async () => {
        if (slug) {
            const projectDoc = doc(db, "projects", slug)
            const data = await getDoc(projectDoc)
            // console.log({id: data.id})
            setProject({...data.data(), id: data.id})
        }
    }

    useEffect(() => {
        getProjectDoc()
    }, [getProjectDoc]) 

    const style = {
        wrapper: `sm:px-8 lg:px-20 flex justify-center items-center text-center mt-8 lg:w-9/12 mx-auto`
    }

    return (
        <div className={style.wrapper}>
            <ProjectDetail key={project.id} project={project} />
        </div>
    )
}

export default Project