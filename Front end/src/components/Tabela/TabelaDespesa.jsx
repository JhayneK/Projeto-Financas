import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTabelaSelectContext } from "../../context/TabelaSelectContext";

export default function TabelaDespesa({ dados }) {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "banco", headerName: "BANCO", width: 150 },
        {
            field: "categoria",
            headerName: "CATEGORIA",
            type: "number",
            width: 150,
        },
        { field: "metodoPagamento", headerName: "MÉT. PAGAMENTO", width: 200 },
        { field: "parcelamento", headerName: "PARCELAMENTO", width: 200 },
        { field: "valor", headerName: "VALOR", width: 160 },
        { field: "data", headerName: "DATA", width: 160 },
        { field: "descricao", headerName: "DESCRIÇÃO", width: 600 },
    ];

    const rows = dados.map((row) => ({
        id: row.ID,
        banco: row.BANCO,
        categoria: row.CATEGORIA,
        metodoPagamento: row.METODO_PAGAMENTO,
        parcelamento: row.PARCELAMENTO,
        valor: row.VALOR,
        data: row.DATA,
        descricao: row.DESCRICAO,
    }));

    const [linhaSelecionada, setLinhaSelecionada] = useState([]);

    const { idRow, setIdRow } = useTabelaSelectContext();

    // Definindo idRow = linhaSelecionada
    useEffect(() => {
        setIdRow(linhaSelecionada);
    }, [linhaSelecionada, setIdRow]);

    return (
        <Box sx={{ height: "69vh", width: "100%" }}>
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
                            pageSize: 15,
                        },
                    },
                }}
                pageSizeOptions={[15]}
                checkboxSelection
                disableRowSelectionOnClick
                // slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
}
