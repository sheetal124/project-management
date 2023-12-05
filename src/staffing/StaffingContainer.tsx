import { Navigate, Route, Routes } from "react-router-dom"
import StaffingList from "./staffingList/StaffingList"
import StaffingForm from "./staffingForm/StaffingForm"

function Staffing() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="list" />} />
            <Route path="list" element={<StaffingList />} />
            <Route path="add" element={<StaffingForm />} />
        </Routes>
    )
}

export default Staffing