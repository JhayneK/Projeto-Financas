import React from "react";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import "./style.css";

export default function Barralateral() {
  return (
    <div className="barraLateralContainer">
      <div className="posicaoIcones">
        <MdOutlineSpaceDashboard size={26} style={{marginTop: 4}}/> 
        <FaChartBar size={26} style={{marginTop: 20}}/>
        <GoGear size={26} style={{marginTop: 20}}/>
      </div>
    </div>
  );
}
