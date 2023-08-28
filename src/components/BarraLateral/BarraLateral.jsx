import { FaChartBar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Barralateral() {
    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-content">              
                <Link to="../dashboard">
                    <div className="botoes-sidebar">
                        <MdOutlineSpaceDashboard id="dashboard-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
                <Link to="../relatorio">
                    <div className="botoes-sidebar">
                        <FaChartBar id="relatory-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>                   
                <Link id="config-icon-position" to="../config">
                    <div className="botoes-sidebar">
                        <GoGear id="config-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
            </div>
        </div>
    );
}