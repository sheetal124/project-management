import { Navigate, Route, Routes } from "react-router-dom"
import ProjectList from "./projectList/ProjectList"
import ProjectForm from "./projectForm/ProjectForm"

function Project() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<ProjectList />} />
            <Route path="add" element={<ProjectForm />} />
        </Routes>
    )
}

export default Project