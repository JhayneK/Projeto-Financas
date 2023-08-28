import { useEffect } from "react";


export default function Relatorio() {

    useEffect(() => {
        document.title = "Relatório";
    }, []);

    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <h1>Relatorio</h1>
            </div>
        </div>
    )
}