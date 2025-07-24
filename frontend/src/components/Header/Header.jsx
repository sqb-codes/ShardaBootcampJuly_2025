import { Link, useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate();
    const role = JSON.parse(localStorage.getItem('role'));

    const handleLogout = () => {
        // Clear user data from local storage or state management
        localStorage.clear();
        navigate("/login");
    }

    return (
        <header>
            <nav className="bg-blue-500 p-4">
                <Link to="/">Home</Link>
                {
                    !role && (
                        <>
                            <Link to="/login" className="ml-4">Login</Link>
                            <Link to="/register" className="ml-4">Register</Link>
                        </>
                    )
                }

                {
                    role && (
                        <>
                            <Link to="/dashboard" className="ml-4">Dashboard</Link>
                            <button onClick={handleLogout} className="ml-4 text-white bg-red-500 px-3 py-1 rounded">
                                Logout
                            </button>
                        </>
                    )
                }

            </nav>
        </header>
    )
}