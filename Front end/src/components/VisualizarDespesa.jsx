import { useState, useEffect } from "react";
import axios from "axios";


export default function VisualizarDespesa({ onClose, lineId }) {
  
    // Validação para caso tiver várias linhas selecionadas na tabela

    const [banco, setBanco] = useState("");
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [parcelamento, setParcelamento] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        // Puxar da API
        axios.get("/dados_randomicos.json")
            .then((response) => {
                // Puxando pelo ID do ITEM
                const item = response.data.fluxo.find((item) => item.ID === lineId[0])

                // Verificar se o item foi encontrado
                if (item) {
                    // Atribuição dos valores encontrados aos useStates
                    setBanco(item.BANCO);
                    setValor(item.VALOR);
                    setCategoria(item.CATEGORIA);
                    setParcelamento(item.PARCELAMENTO);
                    setMetodoPagamento(item.METODO_PAGAMENTO);
                    setDescricao(item.DESCRICAO);
                } else {
                    // Nenhuma linha selecionada na tabela
                    console.error("É necessário selecionar algum registro na tabela")
                }
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON")
            })
    }, [lineId])  // Adicione lineId como dependência para que a consulta seja acionada quando ele mudar

    return (
        <div className="tela-inserir">
            <div className="caixa-cadastro fadeInDown">
                <div className="redimensionamento-cadastro">
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Banco</label>
                                    <select
                                        name="banco"
                                        id=""
                                        value={banco} 
                                        readOnly >
                                            <option value={banco}>{banco}</option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Valor</label>
                                    <input
                                        type="text"
                                        value={valor} 
                                        readOnly />                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Categoria</label>
                                    <select
                                        name="categoria"
                                        id=""
                                        value={categoria} 
                                        readOnly >
                                            <option value={categoria}>{categoria}</option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Parcelamento</label>
                                    <input
                                        type="text"
                                        value={parcelamento}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Método de Pagamento</label>
                                    <select
                                        name="metodopagamento"
                                        id=""
                                        value={metodoPagamento} 
                                        readOnly >
                                            <option value={metodoPagamento}>{metodoPagamento}</option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Descrição</label>
                                    <textarea
                                        name="descricao"
                                        id=""
                                        value={descricao}
                                        readOnly
                                        maxLength="300"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
}
