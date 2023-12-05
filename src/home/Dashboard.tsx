import { Outlet } from "react-router-dom"
import Header from "../core/compnents/header/header"
import { useAuth0 } from "@auth0/auth0-react"

function Dashboard() {
    const { user } = useAuth0();
    console.log(user);
    
    const userName = user?.name;

    return (
        <>
            <div>
                <Header userName={userName} />
            </div>
            <Outlet />
        </>
    )
}

export default Dashboard