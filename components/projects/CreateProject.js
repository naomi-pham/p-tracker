import React, { useContext, useState } from 'react'
import { ProjectContext } from '../../context/ProjectContext'
import { useRouter } from 'next/router'
import { UserContext } from '../../context/AuthContext'

const CreateProject = () => {

    let router = useRouter()

    const {user} = useContext(UserContext)
    console.log(user)

    const [input, setInput] = useState(
        {
            title: "",
            description: "",
            status: "Planned",
            demoLink: "",
            sourceCode: "",
            technologies: "",
            progress: "",
            imageLink: ""
        }
    )

    const [error, setError] = useState("")
    const {CreateProject} = useContext(ProjectContext)

    function handleChange(e) {
        setInput(prevInput => (
            {
                ...prevInput,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await CreateProject(input)
            console.log("submitted")
            router.push("/")        
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const style = {
        wrapper: `flex justify-center items-center mt-32 mb-20`,
        form: `bg-transparent border border-zinc-700 p-8 w-11/12 sm:w-8/12 lg:w-6/12 flex flex-col gap-6`,
        formTitle: `font-bold mb-2 text-center`,
        formInputField: `input-field flex flex-col gap-2`,
        formLabel: `text-lg text-zinc-400`,
        formInput: `bg-transparent outline outline-1 outline-zinc-700 p-1 px-3`,
        formOptionInput: `bg-transparent outline outline-1 outline-zinc-700 py-2.5 px-3`,
        formSelectOption: `bg-gray-800 p-1 pl-2`, 
        formButton: `p-3 bg-[#465a7e66] w-full hover:bg-[#465a7e] duration-300`
    }

    return (
            <form onSubmit={handleSubmit} className={style.form}>
                <h3 className={style.formTitle}>New Project</h3>
                
                <div className={style.formInputField}>
                    <label htmlFor='email' className={style.formLabel}>Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={input.title}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='description' className={style.formLabel}>Description</label>
                    <textarea 
                        type="text" 
                        cols={30}
                        rows={5}
                        id="description" 
                        name="description"
                        value={input.description}
                        onChange={handleChange} 
                        className={style.formInput}
                    >
                    </textarea>
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='status' className={style.formLabel}>Status</label>
                    <select 
                        id="status" 
                        name="status"
                        value={input.status}
                        onChange={handleChange} 
                        className={style.formOptionInput}
                    >
                        <option value="Planned" className={style.formSelectOption}>Planned</option>
                        <option value="WIP" className={style.formSelectOption}>WIP</option>
                        <option value="Done" className={style.formSelectOption}>Done</option>
                        <option value="Published" className={style.formSelectOption}>Shipped</option>
                    </select>
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='progress' className={style.formLabel}>Progress</label>
                    <input 
                        type="number" 
                        id="progress" 
                        name="progress"
                        value={input.progress}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='technologies' className={style.formLabel}>Technologies</label>
                    <input 
                        type="text" 
                        id="technologies" 
                        name="technologies"
                        placeholder='e.g. NextJS, TailwindCSS'
                        value={input.technologies}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='demoLink' className={style.formLabel}>Demo link</label>
                    <input 
                        type="text" 
                        id="demoLink" 
                        name="demoLink"
                        value={input.demoLink}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='sourceCode' className={style.formLabel}>Source code</label>
                    <input 
                        type="text" 
                        id="sourceCode" 
                        name="sourceCode"
                        value={input.sourceCode}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <label htmlFor='imageLink' className={style.formLabel}>Image Link</label>
                    <input 
                        type="text" 
                        id="imageLink" 
                        name="imageLink"
                        value={input.imageLink}
                        onChange={handleChange} 
                        className={style.formInput}
                    />
                </div>

                <div className={style.formInputField}>
                    <button className={style.formButton}>Submit</button>
                </div>

            </form>
    )
}

export default CreateProject