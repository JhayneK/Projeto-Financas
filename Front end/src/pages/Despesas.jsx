import { useEffect, useState } from "react";
import TabelaDespesa from "../components/Tabela/TabelaDespesa";
import InserirDespesa from "../components/Despesa/InserirDespesa";
import VisualizarDespesa from "../components/Despesa/VisualizarDespesa";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";
import { useTabelaSelectContext } from "../context/TabelaSelectContext";
import EditarDespesa from "../components/Despesa/EditarDespesa";

export default function Despesas() {
    useEffect(() => {
        document.title = "Despesas";
    }, []);

    const [exibirCarregamento, setExibirCarregamento] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // Após o carregamento (simulação), você pode redirecionar o usuário ou executar outras ações necessárias
            setExibirCarregamento(false); // Desativa a tela de carregamento
        }, 350); // Simula o carregamento por 2 segundos (ajuste conforme necessário)
    }, []);

    const [exibirCadastro, setExibirCadastro] = useState(false);
    const [exibirVisualizar, setExibirVizualizar] = useState(false);
    const [exibirEditar, setExibirEditar] = useState(false);

    const handleAbrirCadastro = () => {
        setExibirCadastro(true);
    };

    const handleFecharCadastro = () => {
        setExibirCadastro(false);
    };

    const handleAbrirVisualizar = () => {
        if (idRow.length < 1) {
            alert("É necessário selecionar uma linha para poder visualizar.");
        } else if (idRow.length === 1) {
            setExibirVizualizar(true);
        } else {
            alert(
                "É necessário selecionar APENAS uma linha para poder visualizar."
            );
        }
    };

    const handleFecharVisualizar = () => {
        setExibirVizualizar(false);
    };
    
    const handleAbrirEditar = () => {
        if (idRow.length < 1) {
            alert("É necessário selecionar uma linha para poder editar.");
        } else if (idRow.length === 1) {
            setExibirEditar(true);
        } else {
            alert(
                "É necessário selecionar APENAS uma linha para poder editar."
            );
        }
    };

    const handleFecharEditar = () => {
        setExibirEditar(false);
    };

    // ID das linhas selecionadas
    const { idRow } = useTabelaSelectContext();

    return !exibirCarregamento ? (
        <div className="page-container">
            <div
                className="pages-logado-main-content"
                style={{ paddingLeft: "3vw" }}
            >
                <div className="tabela">
                    <div className="botoes-dashboard">
                        <button className="botao-dashboard">RELOAD</button>
                        <button
                            onClick={handleAbrirCadastro}
                            className="botao-dashboard"
                        >
                            INSERIR
                        </button>
                        <button
                            onClick={handleAbrirVisualizar}
                            className="botao-dashboard"
                        >
                            VISUALIZAR
                        </button>
                        <button onClick={handleAbrirEditar} className="botao-dashboard">EDITAR</button>
                        <button className="botao-dashboard">
                            DELETAR SELEC.
                        </button>
                    </div>
                    <TabelaDespesa />
                </div>
            </div>
            {exibirCadastro && (
                <InserirDespesa onClose={handleFecharCadastro} />
            )}
            {exibirVisualizar && (
                <VisualizarDespesa
                    lineId={idRow}
                    onClose={handleFecharVisualizar}
                />
            )}
            {exibirEditar && (
                <EditarDespesa
                    lineId={idRow}
                    onClose={handleFecharEditar}
                />
            )}
        </div>
    ) : (
        <TelaCarregamento />
    );
}
