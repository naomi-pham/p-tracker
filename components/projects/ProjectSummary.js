import React from 'react'
import Progress from '../UI/Progress'

const ProjectSummary = ({project}) => {

  const style = {
    card: `flex flex-col gap-8 items-center sm:items-start w-full mx-auto text-center p-8 sm:text-left border border-zinc-700`,
    cardHeader: `flex flex-col gap-3`,
    cardTitle: `font-bold`,
    cardDate: `text-base opacity-80`,
    cardDateSpan: `underline underline-offset-2 hover:opacity-70 z-10`,
    cardBody: `flex flex-col sm:flex-row gap-4 sm:gap-4 items-center`,
    projectStatus: `flex items-center justify-center w-fit rounded-full px-4 py-0.5 bg-teal-600 hover:bg-teal-500`,
    projectTechnology: `flex items-center justify-center w-fit rounded-full px-2.5 py-0.5 bg-gray-700 hover:bg-gray-600`,
  }

  return (
    <div className={style.card}>    
      <div className={style.cardHeader}>
        <h3 className={style.cardTitle}>{project.title}</h3>
        <p className={style.cardDate}>Posted on Oct 22 by <span className={style.cardDateSpan}>Naomi</span></p>
      </div>
      <Progress value={project.progress} />          
      <div className={style.cardBody}>    
        <div className='flex flex-wrap gap-4'>
          <div className={style.projectStatus}>{project.status}</div>
            {project.technologies?.split(",").map(technology => (
              <div
                key={technology}
                className={style.projectTechnology}
              >
                {technology}
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default ProjectSummary