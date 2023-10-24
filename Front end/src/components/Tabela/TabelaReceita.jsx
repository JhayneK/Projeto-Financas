import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function TabelaReceita() {
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
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'banco', headerName: 'BANCO', width: 150 },
        { field: 'categoria', headerName: 'CATEGORIA', type: 'number', width: 200 },
        { field: 'metodoPagamento', headerName: 'MÉT. PAGAMENTO', width: 300 },
        // { field: 'parcelamento', headerName: 'PARCELAMENTO', width: 200 },
        { field: 'valor', headerName: 'VALOR', width: 200 },
        { field: 'data', headerName: 'DATA', width: 200 },
        { field: 'descricao', headerName: 'DESCRIÇÃO', width: 600 },
    ];

    const rows = dados.map((row) => ({
        id: row.ID,
        banco: row.BANCO,
        categoria: row.CATEGORIA,
        metodoPagamento: row.METODO_PAGAMENTO,
        // parcelamento: row.PARCELAMENTO,
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
