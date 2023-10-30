import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useTabelaSelectContext } from "../../context/TabelaSelectContext";
import EditarBanco from "./EditarBanco";

export default function CadastroBanco() {
    const [banco, setBanco] = useState("");

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios
            .get("/dados_randomicos.json")
            .then((response) => {
                setDados(response.data.fluxo);
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON");
            });
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 170 },
        { field: "banco", headerName: "BANCO", width: 188 },
        { field: "data", headerName: "DATA", width: 166 },
    ];

    const rows = dados.map((row) => ({
        id: row.ID,
        banco: row.BANCO,
        data: row.DATA,
    }));

    const [linhaSelecionada, setLinhaSelecionada] = useState([]);

    const { idRow, setIdRow } = useTabelaSelectContext();

    // Definindo idRow = linhaSelecionada
    useEffect(() => {
        setIdRow(linhaSelecionada);
    }, [linhaSelecionada, setIdRow]);

    const [exibirEditar, setExibirEditar] = useState(false);
    const handleAbrirEditar = () => {
        if (idRow.length < 1) {
            alert("É necessário selecionar uma linha para poder editar.");
        } else if (idRow.length === 1) {
            setExibirEditar(true);
        } else {
            alert(
                "É necessário selecionar apenas uma linha para poder editar."
            );
        }
    };
    const handleFecharEditar = () => {
        setExibirEditar(false);
    };

    return (
        <div>
            <button className="botao-dashboard">RELOAD</button>
            <button className="botao-dashboard">INSERIR</button>
            <button onClick={handleAbrirEditar} className="botao-dashboard">
                EDITAR
            </button>
            <button className="botao-dashboard">DELETAR SELEC.</button>
            <Box sx={{ height: "40.5vh", width: "30vw" }}>
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
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
            {exibirEditar && (
                <EditarBanco lineId={idRow} onClose={handleFecharEditar} />
            )}
        </div>
        // <div>
        //     <div style={{ display: "inline-block", margin: "0px 4rem" }}>
        //         <div className="config-container">
        //             <h1 style={{ margin: "0.5rem 0px 3rem 0px" }}>
        //                 Cadastrar Banco
        //             </h1>
        //             <div style={{ marginTop: "4rem" }}>
        //                 {/* <form action="" > */}
        //                 <div>
        //                     <div>
        //                         <label style={{ fontWeight: "bold" }}>
        //                             Nome do banco
        //                         </label>
        //                     </div>
        //                     <input
        //                         type="text"
        //                         value={banco}
        //                         onChange={(event) =>
        //                             setBanco(event.target.value)
        //                         }
        //                         placeholder="Nome do Banco"
        //                         required
        //                     />
        //                 </div>
        //                 <div
        //                     style={{
        //                         display: "flex",
        //                         justifyContent: "center",
        //                     }}
        //                 >
        //                     <button>Cadastrar</button>
        //                 </div>
        //                 {/* </form> */}
        //             </div>
        //         </div>
        //     </div>
        //     <div style={{ display: "inline-block", margin: "0px 4rem" }}>
        //         <div>
        //             <button
        //                 onClick={handleAbrirEditar}
        //                 className="botao-dashboard"
        //             >
        //                 EDITAR
        //             </button>
        //             <button className="botao-dashboard">DELETAR SELEC.</button>
        //             <Box sx={{ height: "40.5vh", width: "20vw" }}>
        //                 <DataGrid
        //                     rows={rows}
        //                     columns={columns}
        //                     rowSelectionModel={linhaSelecionada}
        //                     onRowSelectionModelChange={(novaSelecao) => {
        //                         setLinhaSelecionada(novaSelecao);
        //                     }}
        //                     initialState={{
        //                         pagination: {
        //                             paginationModel: {
        //                                 pageSize: 25,
        //                             },
        //                         },
        //                     }}
        //                     pageSizeOptions={[25]}
        //                     checkboxSelection
        //                     disableRowSelectionOnClick
        //                 />
        //             </Box>
        //         </div>
        //     </div>
        //     {exibirEditar && (
        //         <EditarBanco lineId={idRow} onClose={handleFecharEditar} />
        //     )}
        // </div>
    );
}
