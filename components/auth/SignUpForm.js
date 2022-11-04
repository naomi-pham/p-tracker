import React, { useState, useContext } from 'react'
import {UserContext} from "../../context/AuthContext"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { db } from '../../firebase/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const SignUp = () => {

    const [users, setUsers] = useState({
        email: "", 
        password: "",
        firstName: "",
        lastName: ""
    })

    // add new account to users collection at firebase
    const addUsers = (users) => {
        return addDoc(collection(db, "users"), users)
    }

    const [error, setError] = useState("")

    let router = useRouter()

    const {createUser} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await createUser(users.email, users.password)
            addUsers(users)
            console.log("success")
            // navigate to account page after sign-up
            router.push("/")
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const handleChange = (e) => {
        setUsers(prevUsers => ({
            ...prevUsers,
            [e.target.name]: e.target.value
        }))

    }

    const style = {
        form: `bg-transparent border border-zinc-700 p-8 w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col gap-6`,
        formTitle: `font-bold mb-2 text-center`,
        formLink: `underline underline-offset-2`,
        formInputField: `input-field flex flex-col gap-2`,
        formLabel: `text-lg text-zinc-400`,
        formInput: `bg-transparent outline outline-1 outline-zinc-700 p-1 px-3`,
        formButton: `p-3 bg-[#465a7e66] w-full hover:bg-[#465a7e] duration-300`
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <h3 className={style.formTitle}>Sign Up</h3>

            <div>
                <p className='text-zinc-400'>Already had an account? <Link href={"/login"} className={style.formLink}>Sign in.</Link> </p>
                <p>{error}</p>
            </div>

            <div className={style.formInputField}>
                <label htmlFor='firstName' className={style.formLabel}>First name</label>
                <input 
                    type="firstName" 
                    id="firstName" 
                    name="firstName"
                    value={users.firstName}
                    onChange={handleChange} 
                    className={style.formInput}
                />
            </div>

            <div className={style.formInputField}>
                <label htmlFor='lastName' className={style.formLabel}>Last name</label>
                <input 
                    type="lastName" 
                    id="lastName" 
                    name="lastName"
                    value={users.lastName}
                    onChange={handleChange} 
                    className={style.formInput}
                />
            </div>
        
            <div className={style.formInputField}>
                <label htmlFor='email' className={style.formLabel}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={users.email}
                    onChange={handleChange} 
                    className={style.formInput}
                />
            </div>

            <div className={style.formInputField}>
                <label htmlFor='password' className={style.formLabel}>Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={users.password}
                    onChange={handleChange} 
                    className={style.formInput}
                />
            </div>

            <div className='input-field mt-2'>
                <button className={style.formButton}>Sign up</button>
            </div>

        </form>
    )
}

export default SignUp