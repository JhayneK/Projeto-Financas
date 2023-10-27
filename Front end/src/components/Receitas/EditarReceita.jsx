import { useState, useEffect } from "react";
import axios from "axios";


export default function InserirDespesa({ onClose }) {
    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [valor, setValor] = useState("");
    const [valorError, setValorError] = useState("");
    const [valorValida, setValorValida] = useState("");

    const [parcelamento, setParcelamento] = useState("");
    const [parcelamentoError, setParcelamentoError] = useState("");
    const [parcelamentoValida, setParcelamentoValida] = useState("");
    const [parcelamentoHabilitado, setParcelamentoHabilitado] = useState(true);

    const [camposVazios, setCamposVazios] = useState({
        banco: false,
        categoria: false,
        valor: false,
        descricao: false,
        parcelamento: false,
        metodoPagamento: false,
    });

    const handleBancoChange = (event) => {
        setBanco(event.target.value);
    };

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleMetodoPagamentoChange = (event) => {
        const selectedMetodoPagamento = event.target.value;
        setMetodoPagamento(selectedMetodoPagamento);

        // Se o método de pagamento for "pix", desabilita o campo de parcelamento
        // Fazer isso para todos os métodos viáveis para esta condição
        if (selectedMetodoPagamento === "pix") {
            setParcelamentoHabilitado(false);
            setParcelamento("");
            setParcelamentoError("");
        } else {
            setParcelamentoHabilitado(true);
        }
    };

    const handleParcelamentoChange = (event) => {
        const inputParcelamento = event.target.value;

        // Remova pontos e vírgulas do valor de entrada
        const sanitizedParcelamento = inputParcelamento.replace(/[.,]/g, "");

        // Verifique se o valor é vazio ou contém apenas números
        if (
            sanitizedParcelamento === "" ||
            /^\d+$/.test(sanitizedParcelamento)
        ) {
            const parsedParcelamento = parseInt(sanitizedParcelamento, 10);
            // Verificar se o valor está dentro do limite de 1 a 24
            if (
                sanitizedParcelamento === "" ||
                (parsedParcelamento >= 1 && parsedParcelamento <= 24)
            ) {
                setParcelamentoError(""); // Limpar erro
                setParcelamento(sanitizedParcelamento);
            } else {
                setParcelamentoError("O parcelamento deve estar entre 1 e 24");
            }
        } else {
            setParcelamentoError("O parcelamento deve estar entre 1 e 24");
        }
    };

    const handleValorChange = (event) => {
        const inputValor = event.target.value;

        // Substituir todas as vírgulas por pontos
        const replacedValor = inputValor.replace(/,/g, ".");

        // Verificar se o valor é vazio ou contém apenas números e um único ponto ou vírgula
        if (inputValor === "" || /^[0-9]+(\.|,)?[0-9]{0,2}$/.test(replacedValor)) {
            setValorError(""); // Limpar erro
            setValor(replacedValor);
        }
        // } else {
        //     setValorError("");
        // }
    };

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };

    const limparCampos = () => {
        setBanco("");
        setCategoria("");
        setMetodoPagamento("");
        setDescricao("");
        setParcelamento("");
        setValor("");
        setValorError("");
        setParcelamentoError("");
    };

    const atualizar = () => {
        try {
            // Implementar sistema para validar qual é o ID do banco
            // de acordo com o ID do usuário
            if (
                !banco ||
                !categoria ||
                !metodoPagamento ||
                !valor ||
                !descricao
            ) {
                throw new Error("Campo(s) não preenchido(s)");
            } else {

                setValorValida(valor);

                if (!parcelamento) {

                    if (metodoPagamento === "PIX") {
                        setParcelamentoValida(parcelamento);
                    }
                } else {
                    throw new Error("Campo(s) não preenchido(s)");
                }
            }

            // Valores em sua devida TIPAGEM, as outras variáveis estão certas
            const valorValidado = parseFloat(valorValida);
            const parcelamentoValidado = parseInt(parcelamentoValida);

            // Enviar para o banco de dados
            onClose(); // fecha o componente

            alert("Registro atualizado com sucesso!");

        } catch {
            // Atualize o estado dos campos vazios com base em quais estão vazios
            setCamposVazios({
                banco: !banco,
                categoria: !categoria,
                valor: !valor,
                descricao: !descricao,
                parcelamento: !parcelamento,
                metodoPagamento: !metodoPagamento,
            });
        }
    };

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
                                        className={`${
                                            camposVazios.banco
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        name="banco"
                                        id=""
                                        value={banco}
                                        onChange={handleBancoChange}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="nubank">NuBank</option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Valor</label>
                                    <input
                                        className={`${
                                            camposVazios.valor
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        type="text"
                                        value={valor}
                                        onChange={handleValorChange}
                                    />
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
                                        className={`${
                                            camposVazios.categoria
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        name="categoria"
                                        id=""
                                        value={categoria}
                                        onChange={handleCategoriaChange}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="combustivel">
                                            Combustível
                                        </option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Parcelamento</label>
                                    <input
                                        className={`${
                                            camposVazios.parcelamento &&
                                            parcelamentoHabilitado
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        type="text"
                                        value={parcelamento}
                                        onChange={handleParcelamentoChange}
                                        disabled={metodoPagamento === "pix"}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            marginTop: "0.5vh",
                                            maxWidth: "13vw",
                                            fontSize: "1.6vh",
                                        }}
                                    >
                                        {parcelamentoError}
                                    </p>
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
                                        className={`${
                                            camposVazios.metodoPagamento
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        name="metodopagamento"
                                        id=""
                                        value={metodoPagamento}
                                        onChange={handleMetodoPagamentoChange}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="pix">PIX</option>
                                    </select>
                                </div>
                                <div
                                    className="caixa-cadastro-espacamento"
                                    style={{ marginTop: "8vh" }}
                                >
                                    <label>Descrição</label>
                                    <textarea
                                        className={`${
                                            camposVazios.descricao
                                                ? "campo-vazio"
                                                : ""
                                        }`}
                                        name="descricao"
                                        id=""
                                        value={descricao}
                                        onChange={handleDescricaoChange}
                                        maxLength="300"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={onClose}>Cancelar</button>
                    <button
                        onClick={limparCampos}
                        style={{ marginLeft: "0.5vw" }}
                    >
                        Limpar
                    </button>
                </div>
            </div>
        </div>
    );
}
