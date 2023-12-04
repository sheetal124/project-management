import { Navigate, Route, Routes } from "react-router-dom"
import ClientForm from "./clientForm/ClientForm"
import ClientList from "./clientList/ClientList"

function ClientContainer() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<ClientList />} />
            <Route path="add" element={<ClientForm />} />
            <Route path='*' element={<p>Page not found</p>}></Route>
        </Routes>
    )
}

export default ClientContainer