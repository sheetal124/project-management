import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../../../assets/images/brand-logo.png'
import Logout from '../authentication/Logout'
interface headerProps {
    userName: string | undefined
}
function header({ userName }: headerProps) {
    const location = useLocation();
    console.log(location.pathname);

    const isActive = (path: string) => location.pathname === path;
    return (
        <header className="flex items-center justify-between w-full bg-gradient-to-r from-blue-300 to-blue-500 text-white py-4 px-6">
            {/* Brand logo */}
            <figure className="flex-shrink-0">
                <img src={Logo} className="h-12 w-12 rounded-full" alt="Brand Logo" />
            </figure>

            {/* Navigation */}
            <nav className="flex gap-6">
                <NavLink
                    to="client/list"
                    className={`text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 ${isActive("/home/client/list") ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-500"}`}
                >
                    Client
                </NavLink>
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

            {/* User profile details */}
            <div className="flex items-center">
                <span className="mr-2 text-lg font-semibold">{userName}</span>
                <Logout />
            </div>
        </header>

    )
}

export default header