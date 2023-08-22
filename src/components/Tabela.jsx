import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'Recorrente',
        headerName: 'Recorrente',
        width: 150,
        editable: false,
    },
    {
        field: 'Banco',
        headerName: 'Banco',
        width: 150,
        editable: false,
    },
    {
        field: 'Categoria',
        headerName: 'Categoria',
        type: 'number',
        width: 150,
        editable: false,
    },
    {
        field: 'MetodoPagamento',
        headerName: 'Método de pagamento',
        width: 200,
    },
    {
        field: 'Valor',
        headerName: 'Valor',
        width: 160,
    },
    {
        field: 'Data',
        headerName: 'Data',
        width: 160,
    },
    {
        field: 'Observacao',
        headerName: 'Observação',
        width: 550,
    },
];

const rows = [
    { id: 1, Recorrente: 'Sim', Banco: 'Caixa', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 2, Recorrente: 'Sim', Banco: 'Sicredi', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 3, Recorrente: 'Sim', Banco: 'BB', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 4, Recorrente: 'Não', Banco: 'BB', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 5, Recorrente: 'Sim', Banco: 'BB', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 6, Recorrente: 'Não', Banco: 'Santander', Categoria: "Comida", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 7, Recorrente: 'Não', Banco: 'Itaú', Categoria: "Outros", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 8, Recorrente: 'Sim', Banco: 'Santander', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"},
    { id: 9, Recorrente: 'Sim', Banco: 'Bradesco', Categoria: "Gasolina", MetodoPagamento: "PIX", Valor: 1500, Data: "30/12/2023", Observacao: "TesteTesteTeste TesteTeste"}
];

export default function Tabela() {
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
