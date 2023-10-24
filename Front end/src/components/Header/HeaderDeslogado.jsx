import { Link } from "react-router-dom"


export default function HeaderLogado() {
    return(
        <div className="header">
            <div className="header-content">
                <nav className="navbar">
                    <Link className="header-title" to="/" >Home</Link>
                </nav>
                <nav className="navbar">
                    <Link className="header-title" to="/login">Login</Link>
                </nav>
            </div>
        </div>
    )
}