import { useEffect } from "react";

export default function Login() {    
    
    useEffect(() => {
        document.title = "Login";
    }, []);
    
    return(
        <div className="page-container">
            <div className="pages-deslogado-main-content">
                <h1>Login</h1>
            </div>
        </div>      
    )
}