import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useLocation } from "react-router-dom"

function Navbar() {
    const { user } = useAuth0();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    return (
        <nav className="flex gap-6">
            {user?.email === "admin_office@gmail.com" ? (<NavLink
                to="client/list"
                className={`text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 ${isActive("/home/client/list") ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-500"}`}
            >
                Client
            </NavLink>) : ''}

            <NavLink
                to="project/list"
                className={`text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 ${isActive("/home/project/list") ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-500"}`}
            >
                Project
            </NavLink>
            <NavLink
                to="staffing/list"
                className={`text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 ${isActive("/home/staffing/list") ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-500"}`}
            >
                Staffing
            </NavLink>
        </nav>
    )
}

export default Navbar