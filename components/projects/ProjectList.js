import React, { useContext } from 'react'
import ProjectSummary from './ProjectSummary'
import { ProjectContext } from "../../context/ProjectContext"
import Link from 'next/link'

function ProjectList() {

  const {projects} = useContext(ProjectContext)

  const style = {
    gridContainer: `grid grid-cols-1 lg:grid-cols-2 gap-8`
  }

  return (
    <section className={style.gridContainer}>
        {projects.map((project) => (
          <Link key={project.id} href={"/project/" + project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </section>
  )
}

export default ProjectList