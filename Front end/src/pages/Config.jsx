import React, { useEffect, useState } from "react";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";
import RedefinirSenha from "../components/Configuracoes/RedefinirSenha";
import CadastroBanco from "../components/Configuracoes/CadastroBanco";

export default function Config() {
    useEffect(() => {
        document.title = "Configurações";
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setExibirCarregamento(false);
        }, 350);
    }, []);

    const [exibirCarregamento, setExibirCarregamento] = useState(true);

    const [redefinirSenha, setRedefinirSenha] = useState(true);

    const toggleRedefinirSenha = () => {
        setRedefinirSenha(false);
    };

    const toggleCadastrarBanco = () => {
        setRedefinirSenha(true);
    };

    const styleRedefinirSenha = {
        fontSize: "0.74vw",
        borderBottom: !redefinirSenha ? "2px solid rgb(209, 209, 209)" : "none",
    }

    const styleCadastrarBanco = {
        fontSize: "0.74vw",
        borderBottom: redefinirSenha ? "2px solid rgb(209, 209, 209)" : "none",
    }

    return !exibirCarregamento ? (
        <div className="pages-logado-main-content">
            <div className="header-config-container">
                <div className="header-config-content">
                    <div className="header-config-diretorio">
                    <h2
                            style={styleCadastrarBanco}
                            onClick={toggleCadastrarBanco}
                        >
                            Cadastrar Banco
                        </h2>
                    </div>
                    <div className="header-config-diretorio">
                        <h2
                            style={styleRedefinirSenha}
                            onClick={toggleRedefinirSenha}
                        >
                            Redefinir Senha
                        </h2>
                    </div>
                </div>
            </div>
            <div className="config-main-content">
                {redefinirSenha ? <CadastroBanco /> : <RedefinirSenha />}
            </div>
        </div>
    ) : (
        <TelaCarregamento />
    );
}
