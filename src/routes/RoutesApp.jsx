import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Dashboard from '../pages/Dashboard'
import Relatorio from '../pages/Relatorio'
import Login from '../pages/Login'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>                    
                    <Route path="*" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/config" element={<Config />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/relatorio" element={<Relatorio />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}