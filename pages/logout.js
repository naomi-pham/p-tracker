import LogOutForm from "../components/auth/LogOutForm"

const Logout = () => {

    const style = {
        wrapper: `flex justify-center items-center text-center mt-48 mx-4`,
    }
    return (
        <div className={style.wrapper}>
            <LogOutForm />
        </div>
    )
}

export default Logout