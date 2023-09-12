import { useEffect } from "react";

export default function Receitar() {
    useEffect(() => {
        document.title = "Receitas";
    }, []);

    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <h1>Receitas</h1>
            </div>
        </div>
    )
}