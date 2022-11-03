import SignUpForm from "../components/auth/SignUpForm"

const SignUp = () => {

  const style = {
    wrapper: `mx-4 sm:px-0 my-8 flex items-center flex-col gap-12`,
    container: `flex flex-col items-center text-center gap-5 lg:gap-6`,
    title: `text-4xl sm:text-5xl lg:text-6xl font-bold`,
    titleSpan: `block mt-4 font-mono text-teal-500 sm:inline-block`,
    subtitle: `text-lg sm:text-xl lg:text-2xl text-zinc-400`,
    footerText: `text-zinc-400 text-center`
  }
  
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
          <h1 className={style.title}>Welcome to <span className={style.titleSpan}>P-Tracker</span></h1>
          <h4 className={style.subtitle}>Sign up to start tracking your projects</h4>
        </div>
        <SignUpForm />
        <p className={style.footerText}>(Please enter only a test email since your data is not yet secured)</p>
    </div>
  )
}

export default SignUp