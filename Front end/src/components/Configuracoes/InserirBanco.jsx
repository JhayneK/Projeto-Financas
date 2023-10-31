import { useState } from "react";
// import axios from "axios";


export default function InserirBanco({ onClose }) {
    const [banco, setBanco] = useState("");
    const [data, setData] = useState("");

    const [camposVazios, setCamposVazios] = useState({
        banco: false,
        data: false,
    });

    const limparCampos = () => {
        setBanco("");
        setData("");
    };

    const atualizar = () => {
        try {
            if (!banco || !data) {
                throw new Error("Campo(s) não preenchido(s)");
            }

            // Enviar para o banco de dados
            alert("Registro inserido com sucesso!");

            onClose();
            
            window.location.reload();
        } catch {
            setCamposVazios({
                banco: !banco,
                data: !data,
            });
        }
    };

    return (
        <div className="config-editar-container">
            <div className="config-editar-box fadeInDown">
                <div className="config-editar-content">
                    <div style={{ marginTop: "8%" }}>
                        <div>
                            <label style={{ fontWeight: "bold" }}>Banco</label>
                        </div>
                        <input
                            // className={`${!bancoError ? "" : "campo-vazio"}`}
                            className={`${camposVazios.banco ? "campo-vazio" : ""}`}
                            style={{
                                padding: "5px",
                            }}
                            type="text"
                            value={banco}
                            onChange={(event) => setBanco(event.target.value)}
                            maxLength={50}
                            required
                        />
                        <div style={{ marginTop: "1rem" }}>
                            <label style={{ fontWeight: "bold" }}>Data</label>
                        </div>
                        <input
                            className={`${
                                camposVazios.data ? "campo-vazio" : ""
                            }`}
                            type="datetime-local"
                            style={{
                                padding: "5px",
                                width: "92.6%",
                            }}
                            name=""
                            id=""
                            value={data}
                            onChange={(event) => setData(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="botoes-cadastro-config">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={onClose}>Cancelar</button>
                    <button
                        style={{ marginLeft: "5px" }}
                        onClick={limparCampos}
                    >
                        LIMPAR
                    </button>
                </div>
            </div>
        </div>
    );
}
