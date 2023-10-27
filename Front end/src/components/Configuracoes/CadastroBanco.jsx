import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useTabelaSelectContext } from "../../context/TabelaSelectContext";


export default function CadastroBanco() {
    const [banco, setBanco] = useState("");

    const styleContent = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centralizar horizontalmente
        border: "1px solid black",
        width: "18vw",
        height: "35vh",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "rgb(236, 236, 236)",
        boxShadow: "0px 5px 17px -5px rgba(0,0,0,0.75)",
    };

    const styleForm = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    const styleInput = {
        width: "15vw",
        height: "3vh",
        padding: "0px 5px",
        margin: "2.2rem 0px 1rem 0px",
        border: "1px solid black",
        backgroundColor: "white",
    };

    const styleButton = {
        cursor: "pointer",
        padding: "5px 20px",
        width: "12vw",
        margin: "2rem 0px",
        backgroundColor: "white",
        border: "1px solid black",
    };

    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        axios.get("/dados_randomicos.json")
            .then((response) => {
                setDados(response.data.fluxo)
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON");
            });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 170 },
        { field: "banco", headerName: "BANCO", width: 162 },
    ];

    const rows = dados.map((row) => ({
        id: row.ID,
        banco: row.BANCO,
    }));

    const [linhaSelecionada, setLinhaSelecionada] = useState([]);

    const { idRow, setIdRow } = useTabelaSelectContext();

    // Definindo idRow = linhaSelecionada
    useEffect(() => {
        setIdRow(linhaSelecionada);
    }, [linhaSelecionada, setIdRow]);

    return (
        <div>
            <div style={{ display: "inline-block", margin: "0px 4rem" }}>
                <div style={styleContent}>
                    <h1 style={{margin: "0.5rem 0px 0px 0px"}}>Cadastrar Banco</h1>
                    <div style={{ marginTop: "4rem" }}>
                        <form action="" style={styleForm}>
                            <div>
                                <input
                                    type="text"
                                    style={styleInput}
                                    value={banco}
                                    onChange={(event) =>
                                        setBanco(event.target.value)
                                    }
                                    placeholder="Nome do Banco"
                                    required
                                />
                            </div>
                            <div>
                                <button style={styleButton}>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: "inline-block", margin: "0px 4rem" }}>
                <div>
                    <button className="botao-dashboard">EDITAR</button>
                    <button className="botao-dashboard">DELETAR SELEC.</button>
                    <Box sx={{ height: "40.5vh", width: "20vw" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            rowSelectionModel={linhaSelecionada}
                            onRowSelectionModelChange={(novaSelecao) => {
                                setLinhaSelecionada(novaSelecao);
                            }}
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
    );
}
