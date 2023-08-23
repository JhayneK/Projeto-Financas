import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Dashboard from '../pages/Dashboard'
import Relatorio from '../pages/Relatorio'
import Login from '../pages/Login'
import LayoutComBarraLateral from '../components/BarraLateral/LayoutComBarraLateral'
import LayoutSemBarraLateral from '../components/BarraLateral/LayoutSemBarraLateral'

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
                    {/* ROTAS COM A BARRA LATERAL */}
                    <Route path="/dashboard" element={<Dashboard />} />
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
                    {/* ROTAS SEM A BARRA LATERAL */}
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}