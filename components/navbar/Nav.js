import React from 'react'
import Link from "next/link"
import SignInLinks from './SignInLinks'
import SignOutLinks from "./SignOutLinks"
import { UserContext } from '../../context/AuthContext'
import { useContext } from "react"


const Nav = () => {

  const {user} = useContext(UserContext)

  return (
    <nav className='p-5 sm:px-10 lg:px-20 bg-transparent border-b border-zinc-700'>
        <div className='flex place-content-between items-center'>
            <Link href="/">
                <h4 className='text-teal-500 font-bold'>P-Tracker</h4>
            </Link>
            {user && <SignInLinks />}
            {!user && <SignOutLinks />} 

        </div>
    </nav>
  )
}

export default Nav