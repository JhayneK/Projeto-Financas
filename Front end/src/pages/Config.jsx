import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import TelaCarregamento from "../components/TelaCarregamento/TelaCarregamento";
import { red } from "@mui/material/colors";

const headerStyle = {
  position: "absolute",
  width: "90%",
  height: "26px",
  right: "0",
  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "2px",
  marginTop: "1px",
};

const rectangleStyle = {
  position: "absolute",
  width: "90%",
  height: "26px",
  right: "0",
  background: "#FFFFFF",
  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "2px",
  marginTop: "1px",
};

const textHeaderStyle = {
  borderRadius: "2px",
  position: "absolute",
  width: "90%",
  height: "24px",
  right: "0",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "15px",
  lineHeight: "18px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  marginLeft: "20px",
  marginTop: "1px",
};

const Config = () => {
  useEffect(() => {
    document.title = "Configurações";
  }, []);

  const [exibirCarregamento, setExibirCarregamento] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExibirCarregamento(false);
    }, 350);
  }, []);

  const [redefinirSenha, setRedefinirSenha] = useState(true);

  const toggleRedefinirSenha = () => {
    setRedefinirSenha(true);
  };

  const toggleCadastrarBanco = () => {
    setRedefinirSenha(false);
  };

  const cardStyle = {
    backgroundColor: "#F7F7F7",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: "20px",
    width: "100%",
    padding: "16px",
    borderWidth: "3px",
    borderColor: "#000000",
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const cardWidth = {
    width: "300px",
    height: "300px",
    paddingRight: "100px",
    alignSelf: "center",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
  };

  const inputStyle = {
    height: "36px",
    width: "100%",
    borderRadius: "4px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    padding: "8px",
  };

  const buttonStyle = {
    border: "none",
    borderRadius: "11px",
    height: "40px",
    width: "100%",
  };

  return !exibirCarregamento ? (
    <div className="pages-logado-main-content">
      <div style={headerStyle}></div>
      <div style={rectangleStyle}></div>
      <div style={textHeaderStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={toggleRedefinirSenha}
            style={{
              border: "none",
              background: "transparent",
              marginRight: "20px",
              color: redefinirSenha ? "#000000" : "#BDBDBD",
            }}
          >
            Redefinir Senha
          </button>
          <button
            onClick={toggleCadastrarBanco}
            style={{
              border: "none",
              background: "transparent",
              color: redefinirSenha ? "#BDBDBD" : "#000000",
            }}
          >
            Cadastrar Banco
          </button>
        </div>
      </div>
      {redefinirSenha && (
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
            height: "300px",
            width: "300px",
            background: "#F7F7F7",
            alignSelf: `center`,
            borderWidth: "1px",
            borderColor: "#000000",
          }}
        >
          <div style={cardStyle}>
            <div onClick={toggleRedefinirSenha} style={titleStyle}>
              Redefinição de Senha
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#F7F7F7",
              }}
            >
              <input
                type="password"
                placeholder="Senha atual"
                style={{ ...inputStyle, width: "100%" }}
              />
              <input
                type="password"
                placeholder="Senha nova"
                style={{ ...inputStyle, width: "100%" }}
              />
              <input
                type="password"
                placeholder="Confirmar senha nova"
                style={{ ...inputStyle, width: "100%" }}
              />
              <button style={buttonStyle}>Redefinir</button>
            </div>
          </div>
        </div>
      )}
      {!redefinirSenha && (
        <div style={cardContainerStyle}>
          <div style={{ ...cardWidth }}>
            <div style={cardStyle}>
              <div onClick={toggleCadastrarBanco} style={titleStyle}>
                Cadastro de bancos
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#F7F7F7",
                }}
              >
                <input
                  type="password"
                  placeholder="Nome do banco"
                  style={{ ...inputStyle, width: "100%" }}
                />
                <button style={buttonStyle}>Cadastrar</button>
              </div>
            </div>
          </div>
          <div style={{ ...cardWidth }}>
            <div style={cardStyle}>
              <div onClick={toggleCadastrarBanco} style={titleStyle}>
                Lista de bancos
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#F7F7F7",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <button className="botao-dashboard-config">Excl. Selec.</button>
                  <DataGrid
                    rows={[{ id: 1, col1: "Hello", col2: "World" }]}
                    columns={[
                      { field: "col1", headerName: "Column 1", width: 150 },
                      { field: "col2", headerName: "Column 2", width: 150 },
                    ]}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 25,
                        },
                      },
                    }}
                    pageSizeOptions={[25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <TelaCarregamento />
  );
};

export default Config;
