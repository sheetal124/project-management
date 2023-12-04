import { Navigate, Route, Routes } from "react-router-dom"
import StaffingList from "./staffingList/StaffingList"
import StaffingForm from "./staffingForm/StaffingForm"

function StaffingContainer() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<StaffingList />} />
            <Route path="add" element={<StaffingForm />} />
            <Route path='*' element={<p>Page not found</p>}></Route>
        </Routes>
    )
}

export default StaffingContainer