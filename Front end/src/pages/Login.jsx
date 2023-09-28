import { useEffect } from "react";
import TelaLogin from "../components/Login/TelaLogin";
import finances from "../assets/img/finances.jpg"
import shieldlogin from "../assets/img/shieldlogin.png"

export default function Login() {    
    
    useEffect(() => {
        document.title = "Login";
    }, []);

    return(
        <div className="page-container">
            <div className="container-login">
                <img style={{width: "100%", height: "100%"}} id="finances-image" src={finances} alt="finanças" />
                <div className="bloco-login">
                    <div className="conteudo-login">
                        <img style={{width:  "40%", height: "80%"}} src={shieldlogin} alt="shield" />
                        <TelaLogin />
                    </div>
                </div>
            </div>
        </div>      
    )
}