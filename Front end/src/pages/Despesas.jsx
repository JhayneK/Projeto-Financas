import { useEffect, useState } from "react"
import TabelaDespesa from "../components/Tabela/TabelaDespesa"
import InserirDespesa from "../components/InserirDespesa";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";
import { useTabelaSelectContext } from "../context/TabelaSelectContext";


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

    const handleAbrirCadastro = () => {
        setExibirCadastro(true);
    };

    const handleFecharCadastro = () => {
        setExibirCadastro(false);
    };

    // ID das linhas selecionadas
    const { idRow } = useTabelaSelectContext();

    return !exibirCarregamento?(
        <div className="page-container">
            <div className="pages-logado-main-content" style={{paddingLeft: "3vw"}}>
                <div className="tabela">
                    <div className="botoes-dashboard">
                        <button className="botao-dashboard">RELOAD</button>
                        <button onClick={handleAbrirCadastro} className="botao-dashboard">INSERIR</button>
                        <button className="botao-dashboard">VISUALIZAR</button>
                        <button className="botao-dashboard">EDITAR</button>
                        <button className="botao-dashboard">DELETAR SELEC.</button>
                    </div>
                    <TabelaDespesa />
                </div>
            </div>
            {exibirCadastro && (
                <InserirDespesa onClose={handleFecharCadastro} />
            )}
        </div>
    ) : (
        <TelaCarregamento />
    )
}
