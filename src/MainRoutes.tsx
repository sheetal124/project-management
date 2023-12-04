import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./home/Dashboard"
import ClientContainer from "./client/ClientContainer"
import ProjectContainer from "./project/ProjectContainer"
import StaffingContainer from "./staffing/StaffingContainer"

function MainRoutes() {
    return (
        <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Dashboard />}>
                <Route path="client/*" element={<ClientContainer />} />
                <Route path="project/*" element={<ProjectContainer />} />
                <Route path="staffing/*" element={<StaffingContainer />} />
                <Route path='*' element={<p>Page not found</p>}></Route>
            </Route>
            <Route path='*' element={<p>Page not found</p>}></Route>
        </Routes>
    )
}

export default MainRoutes