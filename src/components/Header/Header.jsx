import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className="header">
            <nav className="navbar">
                <Link className="header-title" to="/">Home</Link>
                <Link className="header-title" to="/login">Login</Link>
            </nav>
        </div>
    )
}