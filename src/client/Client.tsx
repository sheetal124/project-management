import { Navigate, Route, Routes } from "react-router-dom"
import ClientForm from "./clientForm/ClientForm"
import ClientList from "./clientList/ClientList"

function Client() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<ClientList />} />
            <Route path="add" element={<ClientForm />} />
        </Routes>
    )
}

export default Client