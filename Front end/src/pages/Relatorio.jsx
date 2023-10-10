import { useEffect } from "react";
import Graf from "../components/Graficos/Graf";

export default function Relatorio() {

    useEffect(() => {
        document.title = "Relatório";
    }, []);

    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <Graf />
            </div>
        </div>
    )
}
