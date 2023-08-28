import { useEffect } from "react";


export default function Config() {

    useEffect(() => {
        document.title = "Configurações";
    }, []);

    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <h1>Config</h1>
            </div>
        </div>
    )
}