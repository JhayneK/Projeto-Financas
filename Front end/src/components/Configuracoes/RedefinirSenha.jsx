import { useState } from "react";


export default function RedefinirSenha() {
    const [senhaAtual, setSenhaAtual] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const styleContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centralizar horizontalmente
        border: "1px solid black",
        width: "18vw",
        height: "35vh",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "rgb(236, 236, 236)",
        // boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        boxShadow: "0px 5px 17px -5px rgba(0,0,0,0.75)"
    };

    const styleForm = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    const styleInput = {
        width: "15vw",
        height: "3vh",
        padding: "0px 5px",
        margin: "0.5rem 0px",
        border: "1px solid black",
        backgroundColor: "white",
    }

    const styleButton = {
        cursor: "pointer", 
        padding: "5px 20px", 
        width: "12vw", 
        margin: "1.2rem 0px",
        backgroundColor: "white",
        border: "1px solid black"
    }

    return (
        <div style={styleContainer}>
            <h1>Redefinir Senha</h1>
            <div style={{marginTop: "4rem"}}>

                <form action="" style={styleForm} >
                    <div>
                        <input
                            type="password"
                            style={styleInput}
                            value={senhaAtual}
                            onChange={(event) => setSenhaAtual(event.target.value)}
                            placeholder="Senha atual"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            style={styleInput}
                            value={novaSenha}
                            onChange={(event) => setNovaSenha(event.target.value)}
                            placeholder="Nova senha"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            style={styleInput}
                            value={confirmaSenha}
                            onChange={(event) =>
                                setConfirmaSenha(event.target.value)
                            }
                            placeholder="Confirme a nova senha"
                            required
                            />
                    </div>
                    <div>
                        <button style={styleButton}>Redefinir</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
