import React from "react";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Barralateral() {
    return (
        <div className="barra-lateral-container">
            <div className="barra-lateral-icon-positions">
                <Link to="../dashboard">
                    <MdOutlineSpaceDashboard id="link-dashboard" size={26} style={{ marginTop: 4 }} />
                </Link>
                <Link to="../relatorio">
                    <FaChartBar id="link-relatorio" size={26} style={{ marginTop: 40 }} />
                </Link>
                <Link to="../config">
                    <GoGear id="link-config" size={26} style={{ marginTop: 40 }} />
                </Link>
            </div>
        </div>
    );
}