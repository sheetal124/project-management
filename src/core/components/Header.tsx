import Logo from '../../assets/images/brand-logo.png';
import Navbar from './Navbar';
import Logout from './authentication/Logout';
interface headerProps {
    userName: string | undefined,
    userImg: string | undefined
}
function Header({ userName, userImg }: headerProps) {

    return (
        <header className="flex items-center justify-between w-full bg-gradient-to-r from-blue-300 to-blue-400 text-white py-4 px-6">
            {/* Brand logo */}
            <figure className="flex-shrink-0">
                <img src={Logo} className="h-12 w-12 rounded-full" alt="Brand Logo" />
            </figure>

            {/* Navigation */}
            <Navbar />

            {/* User profile details */}
            <div className="flex items-center">
                <span className="mr-2 text-lg font-semibold">{userName}</span>
                <img src={userImg} className="h-8 w-8 rounded-full mr-2" alt="" />
                <Logout />
            </div>
        </header>

    )
}

export default Header