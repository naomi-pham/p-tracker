import Dashboard from "../components/dashboard/Dashboard"
import { UserContext } from "../context/AuthContext"
import { useContext } from "react"
import Signup from "./signup"

export default function Home({posts}) {
    const {user} = useContext(UserContext)

    const style = {
        wrapper: `sm:px-8 lg:px-20 mt-10`
    }

    return (
        <div className={style.wrapper}>
            {user && <Dashboard />}
            {!user && <Signup />}
        </div>
    )
  }

// Alternative to Redux in NextJS: 
// https://javascript.plainenglish.io/should-you-use-redux-in-next-js-5e57201c34da