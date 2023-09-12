import { useEffect } from "react";

export default function Gasolina() {
    useEffect(() => {
        document.title = "Gasolina";
    }, []);

    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <h1>Gasolina</h1>
            </div>
        </div>
    )
}