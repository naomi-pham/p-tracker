import Link from 'next/link'
import React from 'react'

const SignOutLinks = () => {
  return (
    <ul className='flex gap-8'>
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/login">Log In</Link></li>
    </ul>
  )
}

export default SignOutLinks