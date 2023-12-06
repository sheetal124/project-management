import { Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Header from "../core/components/Header";

function Dashboard() {
    const { user } = useAuth0();
    console.log(user);

    return (
        <>
            <div>
                <Header userName={user?.name} userImg={user?.picture} />
            </div>
            <Outlet />
        </>
    )
}

export default Dashboard