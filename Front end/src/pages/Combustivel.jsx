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
    const [precoGasolina, setPrecoGasolina] = useState("");

    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("");
    // const [valor, setValor] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [parcelamento, setParcelamento] = useState("");

    const dataHoraAtual = new Date().toISOString().slice(0, 16);
    const dataAtual = new Date().getDate();
    const [data, setData] = useState("");

    const [descricao, setDescricao] = useState("");

    const valor =
        (parseFloat(precoGasolina) / parseFloat(consumoMedio)) *
        parseFloat(distPercorrida);

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

    const adicionarDespesa = () => {
        try {
            // validação de campos nulos
            // if (!distPercorrida || !precoGasolina || !consumoMedio || !banco || !categoria || !metodoPagamento || !descricao || !data) {
            //     throw new Error("Campo(s) não preenchido(s)");
            // }

            alert("Despesa adicionada com sucesso!");
            limpaCampos();
        } catch {
            // updateEmptyFieldClasses();
        }
    };

    const limpaCampos = () => {
        setDistPercorrida("");
        setConsumoMedio("");
        setPrecoGasolina("");
        setBanco("");
        setMetodoPagamento("");
        setParcelamento("");
        setData("");
        setDescricao("");
    };

    // const updateEmptyFieldClasses = () => {
    //     const fieldsToUpdate = [
    //         distPercorrida,
    //         consumoMedio,
    //         precoGasolina,
    //         banco,
    //         metodoPagamento,
    //         parcelamento,
    //         data,
    //         descricao,
    //     ];

    //     fieldsToUpdate.forEach((field, index) => {
    //         const element = document.querySelectorAll(
    //             ".form-comb input, .form-comb select, .form-comb textarea"
    //         )[index];
    //         if (!field) {
    //             element.classList.add("campo-vazio");
    //         } else {
    //             element.classList.remove("campo-vazio");
    //         }
    //     });
    // };

    return !exibirCarregamento?(
        <div className="page-container">
            <div className="pages-logado-main-content">
                <div className="comb-container fadeInDown">
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
                                    type="text"
                                    value={distPercorrida}
                                    onChange={(event) =>
                                        filtroFloat(event, setDistPercorrida)
                                    }
                                />
                            </div>
                            <div className="form-comb">
                                <label>Consumo médio do veículo (KM/L)</label>
                                <input
                                    type="text"
                                    value={consumoMedio}
                                    onChange={(event) =>
                                        filtroFloat(event, setConsumoMedio)
                                    }
                                />
                            </div>
                            <div className="form-comb">
                                <label>Preço por litro (R$/L)</label>
                                <input
                                    type="text"
                                    value={precoGasolina}
                                    onChange={(event) =>
                                        filtroFloat(event, setPrecoGasolina)
                                    }
                                />
                            </div>
                            <div className="form-comb-buttons">
                                {/* <div> */}
                                {/* <button>Calcular</button> */}
                                <button onClick={limpaCampos}>Limpar</button>
                                {/* </div> */}
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
                                    name="banco"
                                    id=""
                                    value={banco}
                                    onChange={(event) => {
                                        setBanco(event.target.value);
                                    }}
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
                                    onChange={(event) => {
                                        setCategoria(event.target.value);
                                    }}
                                >
                                    <option value="gasolina">Gasolina</option>
                                </select>
                            </div>
                            <div className="form-comb">
                                <label>Método de Pagamento</label>
                                <select
                                    name="metodopagamento"
                                    id=""
                                    value={metodoPagamento}
                                    onChange={(event) => {
                                        setMetodoPagamento(event.target.value);
                                    }}
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
                                        !precoGasolina
                                            ? 0
                                            : valor.toFixed(2)
                                    }
                                    readOnly
                                />
                            </div>
                            <div className="form-comb">
                                <label>Parcelamento</label>
                                <input
                                    type="text"
                                    value={parcelamento}
                                    onChange={(event) => {
                                        setParcelamento(event.target.value);
                                    }}
                                    disabled={metodoPagamento === "pix"}
                                />
                            </div>
                            <div className="form-comb">
                                <label>Data</label>
                                <input
                                    type="datetime-local"
                                    defaultValue={dataAtual}
                                    value={data}
                                    max={dataHoraAtual}                                    
                                    onChange={(event) =>
                                        setData(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-comb">
                                <label>Descrição</label>
                                <textarea
                                    value={descricao}
                                    onChange={(event) =>
                                        setDescricao(event.target.value)
                                    }
                                />
                            </div>
                            <div
                                style={{ marginTop: "24%" }}
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
