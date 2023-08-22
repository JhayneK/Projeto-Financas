import Tabela from "../components/Tabela"

export default function Dashboard() {
    return(
        <div className="page-container">
            <div className="pages-main-content">
                <div className="tabela">
                    <button>Reload</button>
                    <button>Visualizar</button>
                    <button>Inserir</button>
                    <button>Deletar Selec.</button>
                    <Tabela />
                </div>
            </div>
        </div>
    )
}