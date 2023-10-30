import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

export default function RedefinirSenha() {
    const [senhaAtual, setSenhaAtual] = useState("");
    const [consultaSenha, setConsultaSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const [validacaoConsultaSenha, setValidacaoConsultaSenha] = useState("");
    const [validacaoSenhaAtual, setValidacaoSenhaAtual] = useState("");
    const [validacaoNovaSenha, setValidacaoNovaSenha] = useState("");
    const [validacaoConfirmaSenha, setValidacaoConfirmaSenha] = useState("");

    const handleSenhaAtualChange = (event) => {
        setSenhaAtual(event.target.value);
        setValidacaoSenhaAtual("");
    };

    const handleNovaSenhaChange = (event) => {
        setNovaSenha(event.target.value);
        setValidacaoNovaSenha("");
    };

    const handleConfirmaSenhaChange = (event) => {
        setConfirmaSenha(event.target.value);
        setValidacaoConfirmaSenha("");
    };

    const redefinir = () => {
        const camposVazios = {};

        if (!senhaAtual) {
            camposVazios.senhaAtual = true;
            setValidacaoSenhaAtual("Campo vazio");
        }

        if (!novaSenha) {
            camposVazios.novaSenha = true;
            setValidacaoNovaSenha("Campo vazio");
        }

        if (!confirmaSenha) {
            camposVazios.confirmaSenha = true;
            setValidacaoConfirmaSenha("Campo vazio");
        }

        if (novaSenha !== confirmaSenha) {
            camposVazios.novaSenha = true;
            camposVazios.confirmaSenha = true;
            setValidacaoNovaSenha("As senhas não conferem");
            setValidacaoConfirmaSenha("As senhas não conferem");
        }

        try {
            // consulta da senha atual via API
            // setConsultaSenha("")  // definida via API
        } catch {
            console.error("Senha atual digitada está incorreta!")
        }

        if (senhaAtual !== consultaSenha) {
            camposVazios.senhaAtual = true;
            camposVazios.consultaSenha = true;
            setValidacaoSenhaAtual("Senha não confere")
            setValidacaoConsultaSenha("Senha não confere")
        }

        if (Object.keys(camposVazios).length === 0) {
            // Nenhum campo vazio, continuar com a redefinição de senha
            alert("Senha redefinida com sucesso!");

            // Limpa as mensagens de validação
            setSenhaAtual("");
            setConsultaSenha("");
            setNovaSenha("");
            setConfirmaSenha("");

            setValidacaoConsultaSenha("");
            setValidacaoSenhaAtual("");
            setValidacaoNovaSenha("");
            setValidacaoConfirmaSenha("");
        }
    };

    return (
        <div className="config-container">
            <h1>Redefinir Senha</h1>
            <div id="redefinir-senha-espacamento-topo">
                <div className="config-espacamento">
                    <div>
                        <label style={{ fontWeight: "bold" }}>
                            Senha atual
                        </label>
                    </div>
                    <input
                        className={validacaoSenhaAtual ? "campo-vazio" : ""}
                        type="password"
                        value={senhaAtual}
                        onChange={handleSenhaAtualChange}
                        required
                    />
                </div>
                <div className="config-espacamento">
                    <div>
                        <label style={{ fontWeight: "bold" }}>Nova senha</label>
                    </div>
                    <input
                        className={validacaoNovaSenha ? "campo-vazio" : ""}
                        type="password"
                        value={novaSenha}
                        onChange={handleNovaSenhaChange}
                        required
                    />
                </div>
                <div className="config-espacamento">
                    <div>
                        <label style={{ fontWeight: "bold" }}>
                            Repita a nova senha
                        </label>
                    </div>
                    <input
                        className={validacaoConfirmaSenha ? "campo-vazio" : ""}
                        type="password"
                        value={confirmaSenha}
                        onChange={handleConfirmaSenhaChange}
                        required
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "0.5rem 0px",
                    }}
                >
                    <button onClick={redefinir}>Redefinir</button>
                </div>
            </div>
        </div>
    );
}
