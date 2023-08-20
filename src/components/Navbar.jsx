import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

    const pathname = useLocation.pathname

    return(
        <nav className="navbar">
            <Link className="header-title" to="/">Home</Link>
            <Link className="header-title" to="/login">Login</Link>
        </nav>
    )
}