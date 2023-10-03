import { FaChartBar, FaGasPump, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
// import { MdOutlineSpaceDashboard } from "react-icons/md";

export default function Barralateral() {
    const location = useLocation();

    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-content">
                <Link to="/relatorio">
                    <div className={`botoes-sidebar ${location.pathname === '/relatorio' ? 'active' : ''}`}>
                        <FaChartBar id="relatory-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>                   
                <Link to="/gasolina">
                    <div className={`botoes-sidebar ${location.pathname === '/gasolina' ? 'active' : ''}`}>
                        <FaGasPump id="gasolina-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
                <Link to="/receitas">
                    <div className={`botoes-sidebar ${location.pathname === '/receitas' ? 'active' : ''}`}>
                        <FaRegMoneyBillAlt id="receitas-icon" className="botao-sidebar" color="black" />
                    </div>
                </Link>
                <Link to="/despesas">
                    <div className={`botoes-sidebar ${location.pathname === '/despesas' ? 'active' : ''}`}>
                        <BsGraphDownArrow id="despesas-icon" className="botao-sidebar" color="black" />
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