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
                        <button className="botao-dashboard">RELOAD</button>
                        <button onClick={handleAbrirCadastro} className="botao-dashboard">INSERIR</button>
                        <button className="botao-dashboard">VISUALIZAR</button>
                        <button className="botao-dashboard">EDITAR</button>
                        <button className="botao-dashboard">DELETAR SELEC.</button>
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