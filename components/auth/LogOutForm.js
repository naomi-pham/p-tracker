import Link from "next/link"

const Logout = () => {

    const style = {
        container: `border border-zinc-700 p-8 w-10/12 sm:w-7/12 lg:w-4/12 flex flex-col items-center`,
        title: `font-bold mb-2 text-center`,
        buttonWrapper: `input-field mt-2`,
        button: `p-3 bg-gray-700 w-full hover:bg-gray-600 duration-300`
    }
    
    return (
        <div className={style.container}>
            <h3 className={style.title}></h3>
            <p>You are logged out!</p>
            <div className={style.buttonWrapper}>
                <Link href={"/login"}>
                    <button className={style.button}>Log in</button>
                </Link>
            </div>     
        </div>
    )
}

export default Logout