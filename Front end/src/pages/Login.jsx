import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import finances from "../assets/img/finances.jpg"

export default function Login() {    
    
    useEffect(() => {
        document.title = "Login";
    }, []);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="page-container">
            <div className="container-login">
                <div className="div-login">
                    <form className="formulario-login" action="" method="post">
                        <h1 style={{fontSize: "3rem", marginBottom: "3rem"}} className="login-labels">Login</h1>
                        
                        <label>
                            <input className="inputtext-login" 
                            type="text" 
                            value={username} 
                            onChange={(event) => setUsername(event.target.value)} 
                            maxLength="64"
                            placeholder="Usuário" 
                            required />
                        </label>

                        <label>
                            <input style={{marginBottom: "1.5rem"}} className="inputtext-login"
                            type="password" 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)}
                            maxLength="64"
                            placeholder="Senha"
                            required />
                        </label>

                        {/* REDIRECIONAMENTO : APENAS PARA TESTES */}
                        <Link style={{width: "12vw", alignSelf: "center"}} to="/relatorio">
                            <button id="botao-login">Logar</button>
                        </Link>

                    </form>
                </div>
            </div>
            <div className="div-imagem">
                <img id="finances-image" src={finances} alt="finanças" />
            </div>
        </div>      
    )
}