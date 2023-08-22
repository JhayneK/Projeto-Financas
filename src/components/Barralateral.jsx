import { FaChartBar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Barralateral() {
    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-content">
                <div>
                    <Link to="../dashboard">
                        <MdOutlineSpaceDashboard className="botao-sidebar" color="black" />
                    </Link>
                </div>
                <div>
                    <Link to="../relatorio">
                        <FaChartBar className="botao-sidebar" color="black" />
                    </Link>                   
                </div>
                <div>
                    <Link to="../config">
                        <GoGear id="icon-config" className="botao-sidebar" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    );
}