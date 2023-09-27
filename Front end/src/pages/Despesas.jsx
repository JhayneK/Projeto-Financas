import { useEffect, useState } from "react"
import Tabela from "../components/Tabela/TabelaDespesa"
import InserirDespesa from "../components/InserirDespesa";
// import { AiOutlineReload } from "react-icons/ai";  // Reload icon

export default function Despesas() {

    useEffect(() => {
        document.title = "Despesas";
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
                <InserirDespesa onClose={handleFecharCadastro} />
            )}
        </div>
    )
}
