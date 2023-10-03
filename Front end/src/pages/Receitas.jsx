import { useState, useEffect } from "react";
import Tabela from "../components/Tabela/TabelaReceita";
import InserirReceita from "../components/InserirReceita";

export default function Receitas() {
    useEffect(() => {
        document.title = "Receitas";
    }, []);

    const [exibirCadastro, setExibirCadastro] = useState(false);

    const handleAbrirCadastro = () => {
        setExibirCadastro(true);
    };

    const handleFecharCadastro = () => {
        setExibirCadastro(false);
    };


    return(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <div className="tabela">
                    <div className="botoes-dashboard">
                        <button id="botao-reload" className="botao-dashboard">RELOAD</button>
                        <button onClick={handleAbrirCadastro} id="botao-inserir" className="botao-dashboard">INSERIR</button>
                        <button id="botao-visualizar" className="botao-dashboard">VISUALIZAR</button>
                        <button id="botao-deletar-selec" className="botao-dashboard">DELETAR SELEC.</button>
                        {/* <button id="botao-filtro" className="botao-dashboard">FILTRO</button> */}
                    </div>
                    <Tabela />
                </div>
            </div>
            {exibirCadastro && (
                <InserirReceita onClose={handleFecharCadastro} />
            )}
        </div>
    )
}