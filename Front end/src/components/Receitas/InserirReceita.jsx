import { useState } from "react";

export default function InserirReceita({ onClose }) {
    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const dataHoraAtual = new Date().toISOString().slice(0, 16);
    const [data, setData] = useState("");

    const [valor, setValor] = useState("");
    const [valorError, setValorError] = useState("");
    const [valorValida, setValorValida] = useState("");

    const [camposVazios, setCamposVazios] = useState({
        banco: false,
        categoria: false,
        valor: false,
        descricao: false,
        data: false,
        metodoPagamento: false,
    });

    const handleBancoChange = (event) => {
        setBanco(event.target.value);
    };

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    // remover talvez
    const handleMetodoPagamentoChange = (event) => {
        const selectedMetodoPagamento = event.target.value;
        setMetodoPagamento(selectedMetodoPagamento);
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
        setValor("");
        setData("");
        setValorError("");
    };

    const inserir = () => {
        try {
            // Implementar sistema para validar qual é o ID do banco
            // de acordo com o ID do usuário
            if (
                !banco ||
                !categoria ||
                !metodoPagamento ||
                !valor ||
                !descricao ||
                !data ||
                !valor
            ) {
                throw new Error("Campo(s) não preenchido(s)");
            } else {
                setValorValida(valor);
            }

            const valorValidado = parseFloat(valorValida);

            // Enviar para o banco de dados
            onClose(); // fecha o componente

            alert("Registro inserido com sucesso!");
        } catch {
            // Atualize o estado dos campos vazios com base em quais estão vazios
            setCamposVazios({
                banco: !banco,
                categoria: !categoria,
                valor: !valor,
                data: !data,
                descricao: !descricao,
                metodoPagamento: !metodoPagamento,
            });
        }
    };

    return (
        <div className="tela-inserir">
            <div className="caixa-cadastro fadeInDown">
                <div className="caixa-cadastro-content">
                    <div className="caixa-cadastro-coluna">
                        <label style={{marginTop: "0.5rem", fontWeight: "bold"}}>Banco</label>
                        <select
                            className={`${
                                camposVazios.banco ? "campo-vazio" : ""
                            }`}
                            style={{padding: "5px 5px"}}
                            name="banco"
                            id=""
                            value={banco}
                            onChange={handleBancoChange}
                        >
                            <option value="">Selecione</option>
                            <option value="nubank">NuBank</option>
                        </select>
                        <label style={{marginTop: "3rem", fontWeight: "bold"}}>Valor</label>
                        <input
                            style={{padding: "5px 5px"}}
                            className={`${
                                camposVazios.valor ? "campo-vazio" : ""
                            }`}
                            type="text"
                            value={valor}
                            onChange={handleValorChange}
                        />
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label style={{marginTop: "0.5rem", fontWeight: "bold"}}>Categoria</label>
                        <select
                            style={{ padding: "5px 5px" }}
                            className={`${
                                camposVazios.categoria ? "campo-vazio" : ""
                            }`}
                            name="categoria"
                            id=""
                            value={categoria}
                            onChange={handleCategoriaChange}
                        >
                            <option value="">Selecione</option>
                            <option value="combustivel">Combustível</option>
                        </select>
                        <label style={{marginTop: "3rem", fontWeight: "bold"}}>Data</label>
                        <input type="datetime-local" 
                        style={{padding: "5px 5px"}}
                        className={`${camposVazios.data ? "campo-vazio" : ""}`} 
                        name="data"
                        id=""
                        value={data}
                        max={dataHoraAtual}
                        onChange={(event) => setData(event.target.value)} />
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <label style={{marginTop: "0.5rem", fontWeight: "bold"}}>Método de Pagamento</label>
                        <select
                            style={{ padding: "5px 5px", width: "103.5%" }}
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
                        <label style={{marginTop: "3rem", fontWeight: "bold"}}>Descrição</label>
                        <textarea
                            className={`${
                                camposVazios.descricao ? "campo-vazio" : ""
                            }`}
                            style={{padding: "5px 5px", resize: "none", height: "8.5rem", width: "100%"}}
                            name="descricao"
                            id=""
                            value={descricao}
                            onChange={handleDescricaoChange}
                            maxLength="300"
                        ></textarea>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={inserir}>Inserir</button>
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
