import React, { useState } from 'react'
import {GoogleButton} from "react-google-button"

const GoogleSignIn = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-zinc-900 border border-1 border-zinc-700 p-8 sm:w-7/12 lg:w-4/12 flex flex-col gap-6 items-center'>
                <h3 className='font-bold mb-2 text-center'>Sign in</h3>
                <GoogleButton />
            </div>
        </div>
    )
}

export default GoogleSignIn