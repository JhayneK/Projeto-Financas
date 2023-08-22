import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Dashboard from '../pages/Dashboard'
import Relatorio from '../pages/Relatorio'
import Login from '../pages/Login'
import Header from '../components/Header'
import Barralateral from '../components/Barralateral'
import Footer from '../components/Footer'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Header/>
            <Barralateral/>
            <Fragment>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/relatorio" element={<Relatorio />} />
                    <Route path="/config" element={<Config />} />
                </Routes>
            </Fragment>
            <Footer />
        </BrowserRouter>
    )
}