import { useState, useEffect } from "react";
import axios from "axios";


export default function EditarReceita({ onClose, lineId }) {
    const [banco, setBanco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [descricao, setDescricao] = useState("");
   
    const [valor, setValor] = useState("");
    const [valorError, setValorError] = useState("");
    const [valorValida, setValorValida] = useState("")

    const [camposVazios, setCamposVazios] = useState({ banco: false, categoria: false, valor: false, descricao: false, metodoPagamento: false });

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
        setValor("");
        setValorError("");
    };

    const atualizar = () => {
        try {
            // Implementar sistema para validar qual é o ID do banco
            // de acordo com o ID do usuário
            if (!banco || !categoria || !metodoPagamento || !valor || !descricao || !valor) {
                throw new Error("Campo(s) não preenchido(s)");
            } else {
                setValorValida(valor)
            }

            const valorValidado = parseFloat(valorValida);

            // Enviar para o banco de dados
            onClose();  // fecha o componente

            alert("Registro atualizado com sucesso!");

        } catch {
            // Atualize o estado dos campos vazios com base em quais estão vazios
            setCamposVazios({
                banco: !banco,
                categoria: !categoria,
                valor: !valor,
                descricao: !descricao,
                metodoPagamento: !metodoPagamento
            });

        }
    };

    useEffect(() => {
        // Puxar da API
        axios.get("/dados_randomicos.json")
            .then((response) => {
                // Puxando pelo ID do ITEM
                const item = response.data.fluxo.find((item) => item.ID === lineId[0])

                // Verificar se o item foi encontrado
                if (item) {
                    // Atribuição dos valores encontrados aos useStates
                    setBanco(item.BANCO);
                    setValor(item.VALOR);
                    setCategoria(item.CATEGORIA);
                    setMetodoPagamento(item.METODO_PAGAMENTO);
                    setDescricao(item.DESCRICAO);
                } else {
                    // Nenhuma linha selecionada na tabela
                    console.error("É necessário selecionar algum registro na tabela")
                }
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON")
            })
    }, [lineId])  // Adicione lineId como dependência para que a consulta seja acionada quando ele mudar

    return (
        <div className="tela-inserir" >
            <div className="caixa-cadastro fadeInDown">
                <div className="redimensionamento-cadastro">
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Banco</label>
                                    <select className={`${camposVazios.banco ? 'campo-vazio' : ''}`}
                                    name="banco" 
                                    id="" 
                                    value={banco} 
                                    onChange={handleBancoChange}>
                                        <option value={banco}>{banco}</option>
                                        <option value="">Selecione</option>
                                        <option value="nubank">NuBank</option>
                                    </select>
                                </div>
                                <div className="caixa-cadastro-espacamento" style={{marginTop: "8vh"}}>
                                    <label>Valor</label>
                                    <input className={`${camposVazios.valor ? 'campo-vazio' : ''}`}
                                    type="text" 
                                    value={valor} 
                                    onChange={handleValorChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Categoria</label>
                                    <select style={{width: "13.7vw"}} className={`${camposVazios.categoria ? 'campo-vazio' : ''}`} 
                                    name="categoria" 
                                    id="" 
                                    value={categoria} 
                                    onChange={handleCategoriaChange}>
                                        <option value={categoria}>{categoria}</option>
                                        <option value="">Selecione</option>
                                        <option value="combustivel">Combustível</option>
                                    </select>
                                </div>
                                <div className="caixa-cadastro-espacamento-receita" style={{marginTop: "8vh"}}>
                                    <label>Descrição</label>
                                    <textarea className={`${camposVazios.descricao ? 'campo-vazio' : ''}`}
                                    name="descricao" 
                                    id="" 
                                    value={descricao} 
                                    onChange={handleDescricaoChange}
                                    maxLength="300"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="caixa-cadastro-coluna">
                        <div className="caixa-cadastro-alinhamento">
                            <div>
                                <div className="caixa-cadastro-espacamento">
                                    <label>Método de Pagamento</label>
                                    <select style={{width: "14.8vw"}} className={`${camposVazios.metodoPagamento ? 'campo-vazio' : ''}`}
                                    name="metodopagamento" 
                                    id=""
                                    value={metodoPagamento} 
                                    onChange={handleMetodoPagamentoChange}>
                                        <option value={metodoPagamento}>{metodoPagamento}</option>
                                        <option value="">Selecione</option>
                                        <option value="pix">PIX</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botoes-cadastro">
                    <button onClick={atualizar}>Atualizar</button>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={limparCampos} style={{marginLeft: "0.5vw"}}>Limpar</button>
                </div>
            </div>
        </div>
    );
}
