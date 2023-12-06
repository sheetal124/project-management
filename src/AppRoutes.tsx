import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./core/components/authentication/Login"
import Dashboard from "./pages/home/components/Dashboard"
import Client from "./pages/client/components/Client";
import Project from "./pages/project/components/Project";
import Staffing from "./pages/staffing/components/Staffing";

function AppRoutes() {
    const { isAuthenticated, isLoading, user } = useAuth0();


    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {isAuthenticated ? (
                <>
                    <Route path="/home" element={<Dashboard />} >
                        {user?.email === "admin_office@gmail.com" ?
                            <>
                                <Route index element={<Navigate to="client" />} />
                                <Route path="client/*" element={<Client />} />
                            </> :
                            <Route index element={<Navigate to="project" />} />}

                        <Route path="project/*" element={<Project />} />
                        <Route path="staffing/*" element={<Staffing />} />
                    </Route>
                </>
            ) : (
                <Route path="*" element={<Login />} />
            )}
            <Route path='*' element={<p>Page not found</p>} />
        </Routes>
    )
}

export default AppRoutes