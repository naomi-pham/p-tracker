import { UserContext } from "../context/AuthContext"
import { useContext } from "react"
import { useRouter } from "next/router"

const Account = () => {

    let router = useRouter()

    const {user, logout} = useContext(UserContext)

    const handleLogout = async () => {
        try {
            await logout()
            router.push("/logout")  
            console.log("Logged out")  
        } catch (e) {
            console.log(e.message)
        }
    }

    const style = {
        wrapper: `flex justify-center items-center text-center mt-48`,
        container: `bg-transparent border border-1 border-zinc-700 p-8 w-10/12 sm:w-7/12 lg:w-4/12 flex flex-col gap-6 items-center`,
        title: `font-bold mb-2 text-center`,
        buttonWrapper: `input-field mt-2`,
        button: `p-3 bg-gray-700 w-full hover:bg-gray-600 duration-300`
    }


    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h3 className={style.title}>Account</h3>
                <p className="font-bold">User email: <span className="block font-normal">{user && user.email}</span></p>
                <div className={style.buttonWrapper}>
                    <button onClick={handleLogout} className={style.button}>Log out</button>
                </div>     
            </div>
        </div>
    )
}

export default Account