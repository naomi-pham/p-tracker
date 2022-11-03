import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "../../context/AuthContext"


// Generate project/[slug]

const User = () => {

    const router = useRouter()
    // const {slug} = router.query
    const {user} = useContext(UserContext)

    return (
        <div className="flex flex-col h-screen justify-center text-left p-8 lg:w-7/12 mx-auto">
            <p>User id: {user.uid}</p>
            <p>User email: {user.email}</p>
        </div>
    )
}

export default User