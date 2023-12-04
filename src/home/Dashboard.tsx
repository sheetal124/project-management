import { Outlet } from "react-router-dom"
import Header from "../core/compnents/header/header"

function Dashboard() {
    return (
        <>
            <div>
                <Header />
            </div>
            <Outlet />
        </>
    )
}

export default Dashboard