import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/brand-logo.png'
function header() {
    return (
        <header className="flex justify-between w-full ">
            <figure>
                <img src={Logo} className='h-12 w-12' alt="Brand Logo" />
            </figure>
            <nav>
                <Link to="client/list">
                    <span>Client</span>
                </Link>
                <Link to="project/list">
                    <span className="mx-3">Project</span>
                </Link>
                <Link to="staffing/list">
                    <span>Staffing</span>
                </Link>
            </nav>
            <div>
                <span>UserName</span>
                <span>Logout</span>
            </div>
        </header>
    )
}

export default header