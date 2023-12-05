import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="flex h-screen items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
}

export default Login