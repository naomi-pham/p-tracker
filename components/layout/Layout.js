import Nav from "../navbar/Nav"
import { AuthContextProvider } from "../../context/AuthContext"

const Layout = ({children}) => {
    return (
        <AuthContextProvider>
                <Nav />
                {children}
        </AuthContextProvider>
    )
}

export default Layout