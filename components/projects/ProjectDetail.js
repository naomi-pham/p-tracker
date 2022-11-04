import Link from 'next/link'
import React from 'react'
import Progress from '../UI/Progress'

const ProjectDetail = ({project}) => {

    const style = {
        card: `flex flex-col gap-8 mx-auto w-full px-8 pt-8 pb-16 text-left`,
        cardTitle: `text-3xl sm:text-5xl font-bold mb-2`,
        cardDate: `text-lg opacity-60`,
        cardBody: `flex flex-col gap-12`,
        cardText: `text-lg opacity-80`,
        cardSection: `flex flex-col gap-4 items-start`,
        cardSectionTitle: `font-bold opacity-90`,
        projectStatus: `flex items-center justify-center w-fit rounded-full px-2.5 py-0.5 bg-teal-600 hover:bg-teal-500`,
        projectTechnology: `flex w-fit rounded-full px-2.5 py-0.5 bg-gray-700 hover:bg-gray-600`,
        flexContainer: `flex flex-wrap gap-4`,
        textUnderline: `underline underline-offset-4`
    }

    return (
        <div className={style.card}>
            <Link href={"/"}>
                <p> <i class='bx bx-left-arrow-alt'></i><span className={style.textUnderline}>Return</span></p>
            </Link>
            <div>
                <h2 className={style.cardTitle}>{project.title}</h2>
                <p className={style.cardDate}>Posted on Oct 22, 2022</p>     
            </div>
            <div className={style.cardBody}>

                {project.imageLink && <div className={style.cardSection}>
                    <Link href={project.imageLink} target={'_blank'}>
                        <img
                            src={project.imageLink}
                            alt={`Image for ${project.title}`}
                            width={450}
                            height={150}
                            className="rounded-2xl border border-zinc-700 my-2 object-cover"
                        />
                    </Link>
                </div>}
                
                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Description</h4>
                    <p className={style.cardText}>{project.description}</p>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Progress</h4>
                    <Progress value={project.progress} />
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Status</h4>
                    <p className={style.projectStatus}>{project.status}</p>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Technologies</h4>
                    <div className={style.flexContainer}>
                        {project.technologies?.split(",").map(technology => (
                            <div key={technology} className={style.projectTechnology}>
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Links</h4>
                    <div className={style.flexContainer}>
                        {project.demoLink && <Link href={project.demoLink} className={style.projectStatus} target={'_blank'}>Demo</Link>}
                        {project.sourceCode && <Link href={project.demoLink} className={style.projectStatus} target={'_blank'}>Source code</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail