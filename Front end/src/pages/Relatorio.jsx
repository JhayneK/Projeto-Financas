import { useEffect, useState } from "react";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";
import Graf from "../components/Graficos/Graf";

export default function Relatorio() {
    useEffect(() => {
        document.title = "Relatório";
    }, []);

    const [exibirCarregamento, setExibirCarregamento] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // Após o carregamento (simulação), você pode redirecionar o usuário ou executar outras ações necessárias
            setExibirCarregamento(false); // Desativa a tela de carregamento
        }, 350); // Simula o carregamento por 2 segundos (ajuste conforme necessário)
    }, []);

    return !exibirCarregamento ? (
        <div className="page-container">
            <div className="pages-logado-main-content">
                <Graf />
            </div>
        </div>
    ) : (
        <TelaCarregamento />
    );
}
