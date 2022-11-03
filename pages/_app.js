import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { AuthContextProvider } from '../context/AuthContext'
import { ProjectContextProvider } from '../context/ProjectContext'

function MyApp({ Component, pageProps }) {
    return (
      <AuthContextProvider>
        <ProjectContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProjectContextProvider>
      </AuthContextProvider>
    )
}

export default MyApp
