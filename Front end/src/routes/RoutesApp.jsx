import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Config from '../pages/Config'
import Receitas from '../pages/Receitas'
import Despesas from '../pages/Despesas'
import Relatorio from '../pages/Relatorio'
import Login from '../pages/Login'
import LayoutComBarraLateral from '../components/BarraLateral/LayoutComBarraLateral'
import LayoutSemBarraLateral from '../components/BarraLateral/LayoutSemBarraLateral'
import Gasolina from '../pages/Combustivel'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <LayoutComBarraLateral>
                            <Outlet />
                        </LayoutComBarraLateral>
                    }
                >
                    {/* ROTAS PARA USUARIO LOGADO */}
                    <Route path="/combustivel" element={<Gasolina />} />
                    <Route path="/receitas" element={<Receitas />} />
                    <Route path="/despesas" element={<Despesas />} />
                    <Route path="/relatorio" element={<Relatorio />} />
                    <Route path="/config" element={<Config />} />
                </Route>
                <Route
                    element={
                        <LayoutSemBarraLateral>
                            <Outlet />
                        </LayoutSemBarraLateral>
                    }
                >
                    {/* ROTAS PARA USUARIO DESLOGADO */}
                    <Route path="/" element={<Login />} />
                    <Route path="/*" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}