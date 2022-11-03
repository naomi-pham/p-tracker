import CreateProject from "../components/projects/CreateProject"

const Create = () => {

  const style = {
    wrapper: `flex justify-center items-center my-16 px-4 sm:px-0`
  }

  return (
    <div className={style.wrapper}>
        <CreateProject />
    </div>
  )
}

export default Create