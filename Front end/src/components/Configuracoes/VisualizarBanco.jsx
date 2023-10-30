import { useState, useEffect } from "react";
import axios from "axios";

export default function VisualizarBanco({ onClose, lineId }) {
    const [banco, setBanco] = useState("");
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
                    setData(item.DATA);
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
        <div className="config-editar-container">
            <div className="config-editar-box fadeInDown">
                <div className="config-editar-content">
                    <div style={{ marginTop: "8%" }}>
                        <div>
                            <label style={{ fontWeight: "bold" }}>Banco</label>
                        </div>
                        <input
                            style={{
                                padding: "5px",
                            }}
                            type="text"
                            value={banco}
                            readOnly
                        />
                        <div style={{ marginTop: "1rem" }}>
                            <label style={{ fontWeight: "bold" }}>Data</label>
                        </div>
                        <input
                            type="datetime-local"
                            style={{
                                padding: "5px",
                                width: "92.6%",
                            }}
                            name=""
                            id=""
                            value={data}
                            readOnly
                        />
                    </div>
                </div>
                <div className="botoes-cadastro-config">
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
}
