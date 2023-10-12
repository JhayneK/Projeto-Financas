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
                <InserirDespesa onClose={handleFecharCadastro} />
            )}
        </div>
    )
}
