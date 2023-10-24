// import { FaChartBar, FaGasPump, FaRegMoneyBillAlt } from "react-icons/fa";
// import { BsGraphDownArrow } from "react-icons/bs";
// import { GoGear } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
// import { MdOutlineSpaceDashboard } from "react-icons/md";

export default function Barralateral() {
    const location = useLocation();

    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-content">
                <Link to="/relatorio">
                    <div className={`botoes-sidebar ${location.pathname === '/relatorio' ? 'active' : ''}`}>
                        <div style={{paddingLeft: "0.7vw", display: "flex", alignItems: "center"}}>
                            {/* <FaChartBar id="relatory-icon" className="botao-sidebar" color="black" /> */}
                            <span className="material-symbols-outlined">bar_chart</span>
                            <span style={{marginLeft: "10px"}}>&nbsp;Relatórios</span>
                        </div>
                    </div>
                </Link>                   
                <Link to="/combustivel">
                    <div className={`botoes-sidebar ${location.pathname === '/combustivel' ? 'active' : ''}`}>
                        <div style={{paddingLeft: "0.7vw", display: "flex", alignItems: "center"}}>
                            {/* <FaGasPump id="gasolina-icon" className="botao-sidebar" color="black" /> */}
                            <span className="material-symbols-outlined">local_gas_station</span>
                            <span style={{marginLeft: "14px"}}>Combustível</span>
                        </div>
                    </div>
                </Link>
                <Link to="/receitas">
                    <div className={`botoes-sidebar ${location.pathname === '/receitas' ? 'active' : ''}`}>
                        <div style={{paddingLeft: "0.7vw", display: "flex", alignItems: "center"}}>
                            {/* <FaRegMoneyBillAlt id="receitas-icon" className="botao-sidebar" color="black" /> */}
                            <span className="material-symbols-outlined">trending_up</span>
                            <span style={{marginLeft: "10px"}}>&nbsp;Receitas</span>
                        </div>
                    </div>
                </Link>
                <Link to="/despesas">
                    <div className={`botoes-sidebar ${location.pathname === '/despesas' ? 'active' : ''}`}>
                        <div style={{paddingLeft: "0.7vw", display: "flex", alignItems: "center"}}>
                            {/* <BsGraphDownArrow id="despesas-icon" className="botao-sidebar" color="black" /> */}
                            <span className="material-symbols-outlined">trending_down</span>
                            <span style={{marginLeft: "9px"}}>&nbsp;Despesas</span>
                        </div>
                    </div>
                </Link>
                <hr className="linha-config" />
                <Link id="config-icon-position" to="/config">
                    <div className={`botoes-sidebar ${location.pathname === '/config' ? 'active' : ''}`}>
                        <div style={{paddingLeft: "0.6vw", display: "flex", alignItems: "center"}}>
                            {/* <GoGear id="config-icon" className="botao-sidebar" color="black" /> */}
                            <span className="material-symbols-outlined">settings</span>
                            <span style={{marginLeft: "10px"}}>&nbsp;Configurações</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}