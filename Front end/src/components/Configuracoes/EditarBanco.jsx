import { useState, useEffect } from "react";
import axios from "axios";

export default function EditarBanco({ onClose, lineId }) {
    const [banco, setBanco] = useState("");
    const [bancoError, setBancoError] = useState("");

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

    const limparCampos = () => {
        setBanco("");
        setBancoError("");
    }

    const atualizar = () => {
        if (banco.trim().length < 5) {
            setBancoError("Input Vazio")
            // throw new Error("Campo(s) não preenchido(s)");
        } else {
            // Enviar para a API
            alert("Registro atualizado com sucesso!")
            setBanco("");
            setBancoError("");

            onClose
        }
    }

    return (
        <div className="config-editar-container">
            <div className="config-editar-box fadeInDown">
                <div className="config-editar-content">
                    {/* <h1>teste</h1> */}
                    <div style={{ marginTop: "15%" }}>
                        <div>
                            <label style={{ fontWeight: "bold" }}>Banco</label>
                        </div>
                        <input
                            className={`${!bancoError ? "" : "campo-vazio"}`}
                            style={{ padding: "5px" }}
                            type="text"
                            value={banco}
                            onChange={(event) => setBanco(event.target.value)}
                            minLength={5}
                            maxLength={50}
                            required
                        />
                    </div>
                </div>
                <div className="botoes-cadastro-config">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={onClose}>Cancelar</button>
                    <button style={{marginLeft: "5px"}} onClick={limparCampos}>LIMPAR</button>
                </div>
            </div>
        </div>
    );
}
