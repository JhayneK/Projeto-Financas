import { useState } from "react";
import { Link } from "react-router-dom";
import CadastroLogin from "./CadastroLogin";

export default function TelaLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [mostrarOutroComponente, setMostrarOutroComponente] = useState(false);
    const handleEntrarClick = () => {
        setMostrarOutroComponente(true);
    };

    return(
        <div>
            {mostrarOutroComponente ? (
                <CadastroLogin />
            ) : (
                <form action="">
                    <div>
                        <input style={{marginTop: "4rem"}}
                        type="text" 
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)} 
                        maxLength="64"
                        placeholder="Usuário" 
                        autoComplete="username"
                        required />
                    </div>
                    <div>
                        <input type="password" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        maxLength="64"
                        placeholder="Senha"
                        autoComplete="current-password"
                        required />
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
                        <Link to="/relatorio">
                            <button>Entrar</button>
                        </Link>
                    </div>
                    <span style={{display: "flex", justifyContent: "center", fontSize: "12px", marginTop: "5px"}}>Não possui uma conta?&nbsp;<span onClick={handleEntrarClick} style={{textDecoration: "none", color: "blue", cursor: "pointer"}}>Cadastre-se</span></span>
                </form>
            )}
        </div>
    )
}