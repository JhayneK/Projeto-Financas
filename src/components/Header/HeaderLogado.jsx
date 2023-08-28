import { Link } from "react-router-dom"
import { FiChevronDown } from "react-icons/fi";

export default function HeaderLogado() {
    return(
        <div className="header">
            <nav className="navbar">
                <Link className="header-title" to="/config">
                    <span style={{display: "flex", alignItems: "center", justifyContent: "center"}}><FiChevronDown />Perfil</span>
                </Link>
            </nav>
        </div>
    )
}