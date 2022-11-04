import Link from 'next/link'
import React, {useContext} from 'react'
import { UserContext } from '../../context/AuthContext'
import ProjectList from '../projects/ProjectList'

const Dashboard = () => {

  const {user} = useContext(UserContext)

  const style={
    wrapper: `flex flex-col justify-center text-center gap-8 px-8 pb-8`
  }

  return (
    <div className={style.wrapper}>
        <p>This is the community dashboard. 
          <span className='mx-1'>
            <Link href={"/create"} className="underline hover:opacity-70 underline-offset-2">
              Share your project.
            </Link>
          </span>
        </p>
        <div className=''>
            <ProjectList />    
        </div>
    </div>
  )
}

export default Dashboard