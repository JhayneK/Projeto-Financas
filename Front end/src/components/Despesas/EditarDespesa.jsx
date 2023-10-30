import { useState, useEffect } from "react";
import axios from "axios";

export default function EditarDespesa({ onClose, lineId }) {
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
        if (
            inputValor === "" ||
            /^[0-9]+(\.|,)?[0-9]{0,2}$/.test(replacedValor)
        ) {
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

                // MANTER POR ENQUANTO ESTE TRECHO
                // if (!parcelamento) {
                //     if (metodoPagamento === "PIX") {
                //         setParcelamentoValida(parcelamento);
                //     }
                // } else {
                //     throw new Error("Campo(s) não preenchido(s)");
                // }
            }

            // Valores em sua devida TIPAGEM, as outras variáveis estão certas
            const valorValidado = parseFloat(valorValida);
            const parcelamentoValidado = parseInt(parcelamentoValida);

            // Enviar para o banco de dados
            alert("Registro atualizado com sucesso!");

            onClose(); // fecha o componente
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
                    setParcelamento(item.PARCELAMENTO);
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
                            className={`${
                                camposVazios.banco ? "campo-vazio" : ""
                            }`}
                            style={{ padding: "5px 5px" }}
                            name="banco"
                            id=""
                            value={banco}
                            onChange={handleBancoChange}
                        >
                            <option value={banco}>{banco}</option>
                            <option value="">Selecione</option>
                            <option value="nubank">NuBank</option>
                        </select>

                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Valor
                        </label>
                        <input
                            className={`${
                                camposVazios.valor ? "campo-vazio" : ""
                            }`}
                            style={{ padding: "5px 5px" }}
                            type="text"
                            value={valor}
                            onChange={handleValorChange}
                        />
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label
                            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                            Categoria
                        </label>
                        <select
                            className={`${
                                camposVazios.categoria ? "campo-vazio" : ""
                            }`}
                            style={{ padding: "5px 5px" }}
                            name="categoria"
                            id=""
                            value={categoria}
                            onChange={handleCategoriaChange}
                        >
                            <option value={categoria}>{categoria}</option>
                            <option value="">Selecione</option>
                            <option value="combustivel">Combustível</option>
                        </select>
                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Parcelamento (x)
                        </label>
                        <input
                            className={`${
                                camposVazios.parcelamento &&
                                parcelamentoHabilitado
                                    ? "campo-vazio"
                                    : ""
                            }`}
                            style={{
                                height: "1.12rem",
                                padding: "5px 5px",
                            }}
                            type="text"
                            value={parcelamento}
                            onChange={handleParcelamentoChange}
                            disabled={metodoPagamento === "pix"}
                        />

                        {parcelamentoError && (
                            <p
                                style={{
                                    color: "red",
                                    marginTop: "0.5vh",
                                    maxWidth: "15vw",
                                    fontSize: "1.6vh",
                                    fontWeight: "bold",
                                }}
                            >
                                {parcelamentoError}
                            </p>
                        )}
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label
                            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                        >
                            Método de Pagamento
                        </label>
                        <select
                            className={`${
                                camposVazios.metodoPagamento
                                    ? "campo-vazio"
                                    : ""
                            }`}
                            style={{ width: "103.5%", padding: "5px 5px" }}
                            name="metodopagamento"
                            id=""
                            value={metodoPagamento}
                            onChange={handleMetodoPagamentoChange}
                        >
                            <option value={metodoPagamento}>
                                {metodoPagamento}
                            </option>
                            <option value="">Selecione</option>
                            <option value="pix">PIX</option>
                        </select>
                        <label
                            style={{ marginTop: "3rem", fontWeight: "bold" }}
                        >
                            Descrição
                        </label>
                        <textarea
                            className={`${
                                camposVazios.descricao ? "campo-vazio" : ""
                            }`}
                            style={{
                                padding: "5px 5px",
                                resize: "none",
                                height: "8.5rem",
                                width: "99.8%",
                            }}
                            name="descricao"
                            id=""
                            value={descricao}
                            onChange={handleDescricaoChange}
                            maxLength="300"
                        ></textarea>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={onClose}>Fechar</button>
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
