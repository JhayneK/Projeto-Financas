import { useState,useEffect } from "react";
import TelaLogin from "./TelaLogin";
import TelaCarregamento from "../TelaCarregamento/TelaCarregamento";



export default function CadastroLogin() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmacaoPassword, setConfirmacaoPassword] = useState('');

    // Adicione uma variável de estado para controlar a validade da senha de confirmação
    const [senhaConfirmacaoValida, setSenhaConfirmacaoValida] = useState(true);
    const [exibirCarregamento, setExibirCarregamento] = useState(true);

    const [mostrarOutroComponente, setMostrarOutroComponente] = useState(false);
    
    const handleEntrarClick = () => {
        setMostrarOutroComponente(true);
    };

    useEffect(() => {
        setTimeout(() => {
          // Após o carregamento (simulação), você pode redirecionar o usuário ou executar outras ações necessárias
          setExibirCarregamento(false); // Desativa a tela de carregamento
        }, 2000); // Simula o carregamento por 2 segundos (ajuste conforme necessário)
      }, []);
    

    // Adicione uma função para validar a senha de confirmação
    const validarSenhaConfirmacao = () => {
        if (confirmacaoPassword !== password) {
            setSenhaConfirmacaoValida(false);
        } else {
            setSenhaConfirmacaoValida(true);
        }
    };

    return !exibirCarregamento?( 
        <div>
            {mostrarOutroComponente ? (
                <TelaLogin />
            ) : (
                <form action="">
                    <div>
                        <input
                            style={{ marginTop: "4rem"}}
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            maxLength="64"
                            placeholder="Usuário"
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            maxLength="64"
                            placeholder="Email"
                            autoComplete="Email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            maxLength="64"
                            placeholder="Senha"
                            autoComplete="current-password"
                            required
                            style={{ borderColor: senhaConfirmacaoValida ? "" : "red" }}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={confirmacaoPassword}
                            onChange={(event) => setConfirmacaoPassword(event.target.value)}
                            maxLength="64"
                            placeholder="Repita a senha"
                            required
                            onBlur={validarSenhaConfirmacao} // Chame a função de validação quando o campo perde o foco
                            style={{ borderColor: senhaConfirmacaoValida ? "" : "red" }} // Aplicar estilo condicional ao input de senha de confirmação
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                        <button disabled={!senhaConfirmacaoValida}>Cadastrar</button> {/* Desabilite o botão se a senha de confirmação for inválida */}
                    </div>

                    <span style={{ display: "flex", justifyContent: "center", fontSize: "12px", marginTop: "5px" }}>
                        Possui uma conta?&nbsp;
                        <span onClick={handleEntrarClick} style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
                            Entre
                        </span>
                    </span>
                </form>
            )}
        </div>
              ):(
                
                <TelaCarregamento />
    );
}
