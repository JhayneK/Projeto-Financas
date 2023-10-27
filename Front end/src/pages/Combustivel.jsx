import { useEffect, useState } from "react";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";

export default function Combustivel() {
    useEffect(() => {
        document.title = "Combustível";
    }, []);

    const [exibirCarregamento, setExibirCarregamento] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // Após o carregamento (simulação), você pode redirecionar o usuário ou executar outras ações necessárias
            setExibirCarregamento(false); // Desativa a tela de carregamento
        }, 350); // Simula o carregamento por 2 segundos (ajuste conforme necessário)
    }, []);

    const [distPercorrida, setDistPercorrida] = useState("");
    const [consumoMedio, setConsumoMedio] = useState("");
    const [precoCombustivel, setPrecoCombustivel] = useState("");

    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("Combustível");
    // const [valor, setValor] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [parcelamento, setParcelamento] = useState("");
    const [parcelamentoError, setParcelamentoError] = useState("");
    const parcelamentoDesabilitado = metodoPagamento === "pix";

    const dataHoraAtual = new Date().toISOString().slice(0, 16);
    // const dataAtual = new Date().getDate();
    const [data, setData] = useState("");

    const [descricao, setDescricao] = useState("");

    const valor =
        (parseFloat(precoCombustivel) / parseFloat(consumoMedio)) *
        parseFloat(distPercorrida);

    const [camposPreenchidos, setCamposPreenchidos] = useState({
        distPercorrida: true,
        consumoMedio: true,
        precoCombustivel: true,
        parcelamento: true,
        banco: true,
        // categoria: true,
        metodoPagamento: true,
        descricao: true,
        data: true,
    });

    const filtroFloat = (event, setter) => {
        const inputValue = event.target.value;

        // Remove caracteres não numéricos, exceto ponto e vírgula
        const sanitizedInput = inputValue.replace(/[^0-9,.]/g, "");

        // Substitui todas as vírgulas por pontos
        let formattedInput = sanitizedInput.replace(/,/g, ".");

        // Verifica se há mais de um ponto e, se houver, remove os extras
        const parts = formattedInput.split(".");
        if (parts.length > 2) {
            formattedInput = parts[0] + "." + parts[1];
        }

        // Verifica se há mais de dois dígitos após o ponto e, se houver, remove os extras
        const decimalPart = parts[1] || "";
        if (decimalPart.length > 2) {
            formattedInput = parts[0] + "." + decimalPart.slice(0, 2);
        }

        // Se o valor começa com uma vírgula, remove a vírgula
        if (/^,/.test(formattedInput)) {
            formattedInput = formattedInput.slice(1);
        }

        // Se o valor começa com um ponto, adiciona um "0" à frente
        if (/^\./.test(formattedInput)) {
            formattedInput = "0" + formattedInput;
        }

        setter(formattedInput);
    };

    // Função para atualizar o estado de camposPreenchidos
    const atualizarCamposPreenchidos = () => {
        setCamposPreenchidos({
            distPercorrida: !!distPercorrida,
            consumoMedio: !!consumoMedio,
            precoCombustivel: !!precoCombustivel,
            banco: !!banco,
            parcelamento: !!parcelamento,
            metodoPagamento: !!metodoPagamento,
            descricao: !!descricao,
            data: !!data,
        });
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

    const adicionarDespesa = () => {
        try {
            // validação de campos nulos
            atualizarCamposPreenchidos();

            // Verificação se todos os campos estão preenchidos
            if (
                distPercorrida &&
                consumoMedio &&
                precoCombustivel &&
                banco &&
                metodoPagamento &&
                descricao &&
                data
            ) {
                // Criação do JSON e envio ao banco de dados via API

                alert("Despesa adicionada com sucesso!");
                limpaCampos();
            } else {
                // throw new Error("Campo(s) não preenchido(s)");
            }
        } catch {
            console.error("Campo(s) não preenchido(s)");
        }
    };

    const limpaCampos = () => {
        setDistPercorrida("");
        setConsumoMedio("");
        setPrecoCombustivel("");
        setBanco("");
        setMetodoPagamento("");
        setParcelamento("");
        setData("");
        setDescricao("");
        setParcelamentoError("");
    };

    return !exibirCarregamento ? (
        <div className="page-container">
            <div className="pages-logado-main-content">
                <div className="comb-container">
                    <div className="caixa-gasolina">
                        <h1
                            style={{
                                fontSize: "1.3rem",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "0.8rem",
                            }}
                        >
                            Cálculo de Combustível
                        </h1>
                        <hr />
                        <div className="form-comb-content">
                            <div className="form-comb">
                                <label>Distância Percorrida (KM)</label>
                                <input
                                    className={`${
                                        !camposPreenchidos.distPercorrida
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    type="text"
                                    value={distPercorrida}
                                    onChange={(event) =>
                                        filtroFloat(event, setDistPercorrida)
                                    }
                                    style={{ outline: "none" }}
                                />
                            </div>
                            <div className="form-comb">
                                <label>Consumo médio do veículo (KM/L)</label>
                                <input
                                    className={`${
                                        !camposPreenchidos.consumoMedio
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    type="text"
                                    value={consumoMedio}
                                    onChange={(event) =>
                                        filtroFloat(event, setConsumoMedio)
                                    }
                                    style={{ outline: "none" }}
                                />
                            </div>
                            <div className="form-comb">
                                <label>Preço por litro (R$/L)</label>
                                <input
                                    className={`${
                                        !camposPreenchidos.precoCombustivel
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    type="text"
                                    value={precoCombustivel}
                                    onChange={(event) =>
                                        filtroFloat(event, setPrecoCombustivel)
                                    }
                                    style={{ outline: "none" }}
                                />
                            </div>
                            <div className="form-comb-buttons">
                                <button onClick={limpaCampos}>Limpar</button>
                            </div>
                        </div>
                        <hr style={{ marginTop: "6vh" }} />
                        <h1
                            style={{
                                fontSize: "1.3rem",
                                marginTop: "2.5vh",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Resultado
                        </h1>
                        <div className="form-comb-content">
                            <div className="form-comb">
                                <label>Banco</label>
                                <select
                                    className={`${
                                        !camposPreenchidos.banco
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    name="banco"
                                    id=""
                                    value={banco}
                                    onChange={(event) => {
                                        setBanco(event.target.value);
                                    }}
                                    style={{ outline: "none" }}
                                >
                                    <option value="">Selecione</option>
                                    <option value="nubank">NuBank</option>
                                </select>
                            </div>
                            <div className="form-comb">
                                <label>Categoria</label>
                                <select
                                    name="categoria"
                                    id=""
                                    value={categoria}
                                    style={{ outline: "none" }}
                                    readOnly
                                    // onChange={(event) => {
                                    //     setCategoria(event.target.value);
                                    // }}
                                >
                                    <option value="combustivel">
                                        Combustível
                                    </option>
                                </select>
                            </div>
                            <div className="form-comb">
                                <label>Método de Pagamento</label>
                                <select
                                    className={`${
                                        !camposPreenchidos.metodoPagamento
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    name="metodopagamento"
                                    id=""
                                    value={metodoPagamento}
                                    onChange={(event) => {
                                        setMetodoPagamento(event.target.value);
                                    }}
                                    style={{ outline: "none" }}
                                >
                                    <option value="">Selecione</option>
                                    <option value="pix">PIX</option>
                                </select>
                            </div>
                            <div className="form-comb">
                                <label>Valor</label>
                                <input
                                    type="text"
                                    value={
                                        !distPercorrida ||
                                        !consumoMedio ||
                                        !precoCombustivel
                                            ? 0
                                            : valor.toFixed(2)
                                    }
                                    style={{ outline: "none" }}
                                    readOnly
                                />
                            </div>
                            <div className="form-comb">
                                <label>Parcelamento (x)</label>
                                <input
                                    className={`${
                                        !camposPreenchidos.parcelamento &&
                                        !parcelamentoDesabilitado
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    type="text"
                                    value={parcelamento}
                                    // onChange={(event) => {
                                    //     setParcelamento(event.target.value);
                                    // }}
                                    onChange={handleParcelamentoChange}
                                    style={{ outline: "none" }}
                                    disabled={parcelamentoDesabilitado}
                                />
                                {parcelamentoError && (
                                    <p
                                        style={{
                                            color: "red",
                                            marginTop: "5.5vh",
                                            maxWidth: "16vw",
                                            fontSize: "1.6vh",
                                            fontWeight: "bold",
                                            position: "absolute",
                                        }}
                                    >
                                        {parcelamentoError}
                                    </p>
                                )}
                            </div>
                            <div className="form-comb">
                                <label>Data</label>
                                <input
                                    className={`${
                                        !camposPreenchidos.data
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    type="datetime-local"
                                    // defaultValue={dataAtual}
                                    value={data}
                                    max={dataHoraAtual}
                                    onChange={(event) =>
                                        setData(event.target.value)
                                    }
                                    style={{ outline: "none" }}
                                />
                            </div>
                            <div className="form-comb">
                                <label>Descrição</label>
                                <textarea
                                    className={`${
                                        !camposPreenchidos.descricao
                                            ? "campo-vazio"
                                            : ""
                                    }`}
                                    value={descricao}
                                    onChange={(event) =>
                                        setDescricao(event.target.value)
                                    }
                                    maxLength={300}
                                    style={{ outline: "none" }}
                                />
                            </div>
                            <div
                                style={{ marginTop: "12.5%" }}
                                className="form-comb-buttons"
                            >
                                <button onClick={adicionarDespesa}>
                                    Adicionar à Despesas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <TelaCarregamento />
    );
}
