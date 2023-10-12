import { useState, useEffect } from "react";
import Tabela from "../components/Tabela/TabelaReceita";
import InserirReceita from "../components/InserirReceita";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";

export default function Receitas() {
    useEffect(() => {
        document.title = "Receitas";
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
                    <Tabela />
                </div>
            </div>
            {exibirCadastro && (
                <InserirReceita onClose={handleFecharCadastro} />
            )}
        </div>
    ) : (
        <TelaCarregamento />
    )
}