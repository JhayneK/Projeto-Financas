import { useState, useEffect } from "react";
import axios from "axios";

export default function VisualizarReceita({ onClose, lineId }) {
    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        // Puxar da API
        axios
            .get("/dados_randomicos.json")
            .then((response) => {
                // Puxando pelo ID do ITEM
                const item = response.data.fluxo.find(
                    (item) => item.ID === lineId[0]
                );

                // Verificar se o item foi encontrado
                if (item) {
                    // Atribuição dos valores encontrados aos useStates
                    setBanco(item.BANCO);
                    setValor(item.VALOR);
                    setCategoria(item.CATEGORIA);
                    setData(item.DATA);
                    setMetodoPagamento(item.METODO_PAGAMENTO);
                    setDescricao(item.DESCRICAO);
                } else {
                    // Nenhuma linha selecionada na tabela
                    console.error(
                        "É necessário selecionar algum registro na tabela"
                    );
                }
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON");
            });
    }, [lineId]); // Adicione lineId como dependência para que a consulta seja acionada quando ele mudar

    return (
        <div className="tela-inserir">
            <div className="caixa-cadastro fadeInDown">
                <div className="caixa-cadastro-content">
                    <div className="caixa-cadastro-coluna">
                        <label
                            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                            Banco
                        </label>
                        <select
                            style={{ padding: "5px 5px" }}
                            name="banco"
                            id=""
                            value={banco}
                            readOnly
                        >
                            <option value={banco}>{banco}</option>
                        </select>
                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Valor
                        </label>
                        <input
                            style={{ padding: "5px 5px" }}
                            type="text"
                            value={valor}
                            readOnly
                        />
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label
                            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                            Categoria
                        </label>
                        <select
                            style={{ padding: "5px 5px" }}
                            name="categoria"
                            id=""
                            value={categoria}
                            readOnly
                        >
                            <option value={categoria}>{categoria}</option>
                        </select>
                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Data
                        </label>
                        <input
                            type="datetime-local"
                            style={{ padding: "5px 5px" }}
                            name="data"
                            id=""
                            value={data}
                            readOnly
                        />
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label
                            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                            Método de Pagamento
                        </label>
                        <select
                            style={{ padding: "5px 5px", width: "103.5%" }}
                            name="metodopagamento"
                            id=""
                            value={metodoPagamento}
                            readOnly
                        >
                            <option value={metodoPagamento}>
                                {metodoPagamento}
                            </option>
                        </select>
                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Descrição
                        </label>
                        <textarea
                            style={{
                                padding: "5px 5px",
                                resize: "none",
                                height: "8.5rem",
                                width: "100%",
                            }}
                            name="descricao"
                            id=""
                            value={descricao}
                            maxLength="300"
                            readOnly
                        ></textarea>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
}
