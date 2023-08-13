import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import Home from '../pages/Home'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>                    
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}