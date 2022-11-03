import Link from 'next/link'
import React from 'react'

const SignInLinks = () => {
  return (
    <ul className='flex gap-4'>
        <li className='bg-gray-700 py-1 px-2 hover:opacity-70'><Link href="/create">New Project</Link></li>
        <li className='py-1 px-2 hover:opacity-70'><Link href="/account">Log Out</Link></li>
    </ul>
  )
}

export default SignInLinks