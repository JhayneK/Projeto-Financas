import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';

export default function Tabela() {
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        axios.get("../public/dados_randomicos.json")
            .then((response) => {
                setDados(response.data.fluxo)
            })
            .catch((error) => {
                console.error("Erro ao obter os dados do JSON");
            });
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'banco', headerName: 'BANCO', width: 150 },
        { field: 'categoria', headerName: 'CATEGORIA', type: 'number', width: 150 },
        { field: 'metodoPagamento', headerName: 'MÉT. PAGAMENTO', width: 200 },
        { field: 'parcelamento', headerName: 'PARCELAMENTO', width: 200 },
        { field: 'valor', headerName: 'VALOR', width: 160 },
        { field: 'data', headerName: 'DATA', width: 160 },
        { field: 'descricao', headerName: 'DESCRIÇÃO', width: 600 },
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

    }))

    return (
        <Box sx={{ height: "69vh", width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
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
    );
}
