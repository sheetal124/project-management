import { Navigate, Route, Routes } from "react-router-dom"
import ProjectList from "./projectList/ProjectList"
import ProjectForm from "./projectForm/ProjectForm"

function ProjectContainer() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<ProjectList />} />
            <Route path="add" element={<ProjectForm />} />
            <Route path='*' element={<p>Page not found</p>}></Route>
        </Routes>
    )
}

export default ProjectContainer