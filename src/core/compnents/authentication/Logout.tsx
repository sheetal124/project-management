import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
    const { logout } = useAuth0();

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    );
}

export default Logout