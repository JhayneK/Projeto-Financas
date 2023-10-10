import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";


const Config = () => {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [creditCardOpen, setCreditCardOpen] = useState(false);
  const [loginAndPasswordOpen, setLoginAndPasswordOpen] = useState(false);

  const togglePersonalInfo = () => setPersonalInfoOpen(!personalInfoOpen);
  const togglePrivacy = () => setPrivacyOpen(!privacyOpen);
  const toggleCreditCard = () => setCreditCardOpen(!creditCardOpen);
  const toggleLoginAndPassword = () =>
    setLoginAndPasswordOpen(!loginAndPasswordOpen);

  const cardStyle = {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: "20px",
    width: "500px",
    padding: "16px",
    cursor: "pointer",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
  };

  const inputStyle = {
    height: "24px",
    width: "95%",
    borderRadius: "4px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    padding: "8px",
  };

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="pages-logado-main-content">
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
        }}
        >
        <div style={cardStyle}>
            <div onClick={togglePersonalInfo} style={titleStyle}>
            Informações Pessoais
            <KeyboardArrowDownIcon
                style={{ fontSize: "24px", marginLeft: "auto" }}
            />
            </div>
            {personalInfoOpen ? (
            <div>
                <div style={{ marginBottom: "12px" }}>
                <input type="text" placeholder="Nome" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                <input type="text" placeholder="Sobrenome" style={inputStyle} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                <input type="text" placeholder="Email" style={inputStyle} />
                </div>
                <div>
                <input type="text" placeholder="Telefone" style={inputStyle} />
                </div>
            </div>
            ) : null}
        </div>

        <div style={cardStyle}>
            <div onClick={togglePrivacy} style={titleStyle}>
            Privacidade
            <KeyboardArrowDownIcon
                style={{ fontSize: "24px", marginLeft: "auto" }}
            />
            </div>
            {privacyOpen ? (
            <div>
                <div style={{ marginBottom: "12px" }}>
                <input
                    type="password"
                    placeholder="Senha Atual"
                    style={inputStyle}
                />
                </div>
                <div style={{ marginBottom: "12px" }}>
                <input
                    type="password"
                    placeholder="Nova Senha"
                    style={inputStyle}
                />
                </div>
                <div>
                <input
                    type="password"
                    placeholder="Confirmar Nova Senha"
                    style={inputStyle}
                />
                </div>
            </div>
            ) : null}
        </div>

        <div style={cardStyle}>
            <div onClick={toggleCreditCard} style={titleStyle}>
            Cartão de Crédito
            <KeyboardArrowDownIcon
                style={{ fontSize: "24px", marginLeft: "auto" }}
            />
            </div>
            {creditCardOpen ? (
            <div>
                <div style={{ marginBottom: "12px" }}>
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
                <form style={{marginTop: 10}}>
                    <input
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    style={inputStyle}
                    />
                    <div style={{ marginBottom: "12px" }}>
                    <input
                        type="text"
                        placeholder="Data de Validade"
                        style={inputStyle}
                    />
                    </div>
                </form>
                </div>

                <div>
                <input
                    type="text"
                    placeholder="Código de Segurança"
                    style={inputStyle}
                />
                </div>
            </div>
            ) : null}
        </div>

        <div style={cardStyle}>
            <div onClick={toggleLoginAndPassword} style={titleStyle}>
            Login e Senha
            <KeyboardArrowDownIcon
                style={{ fontSize: "24px", marginLeft: "auto" }}
            />
            </div>
            {loginAndPasswordOpen ? (
            <div>
                <div style={{ marginBottom: "12px" }}>
                <input
                    type="text"
                    placeholder="Nome de Usuário"
                    style={inputStyle}
                />
                </div>
                <div>
                <input type="password" placeholder="Senha" style={inputStyle} />
                </div>
            </div>
            ) : null}
        </div>
        </div>
    </div>
  );
};

export default Config;
