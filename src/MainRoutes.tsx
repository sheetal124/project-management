import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Route, Routes } from "react-router-dom"
import Client from "./client/Client"
import Login from "./core/components/authentication/Login"
import Dashboard from "./home/Dashboard"
import Project from "./project/Project"
import Staffing from "./staffing/StaffingContainer"

function MainRoutes() {
    const { isAuthenticated, isLoading } = useAuth0();

    console.log(isAuthenticated, isLoading);


    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {isAuthenticated ? (
                <>
                    <Route path="/home" element={<Dashboard />} >
                        <Route path="client/*" element={<Client />} />
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

export default MainRoutes