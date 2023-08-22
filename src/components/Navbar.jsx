import { Link } from "react-router-dom"

export default function Navbar() {

    return(
        <nav className="navbar">
            <Link className="header-title" to="/">Home</Link>
            <Link className="header-title" to="/login">Login</Link>
        </nav>
    )
}