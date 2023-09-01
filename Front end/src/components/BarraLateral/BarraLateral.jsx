import { FaChartBar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

export default function Barralateral() {
    const location = useLocation();

    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-content">              
                <Link to="/dashboard">
                    <div className={`botoes-sidebar ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <MdOutlineSpaceDashboard id="dashboard-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
                <Link to="/relatorio">
                    <div className={`botoes-sidebar ${location.pathname === '/relatorio' ? 'active' : ''}`}>
                        <FaChartBar id="relatory-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>                   
                <hr className="linha-config" />
                <Link id="config-icon-position" to="/config">
                    <div className={`botoes-sidebar ${location.pathname === '/config' ? 'active' : ''}`}>
                        <GoGear id="config-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
            </div>
        </div>
    );
}