import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'

export default function MisRutas() {
    return (
        <BrowserRouter>

            {/*Navegacion*/}
            <HeaderNav></HeaderNav>
            {/*Principal*/}
            <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to="/inicio"></Navigate>} />
                <Route path='/inicio' element={<Inicio></Inicio>} />
                <Route path='/portafolio' element={<Portafolio></Portafolio>} />
                <Route path='/servicios' element={<Servicios></Servicios>} />
                <Route path='/curriculum' element={<Curriculum></Curriculum>} />
                <Route path='/contacto' element={<Contacto></Contacto>} />
            </Routes>
            </section>
            {/*Pie de pagina*/}
            <Footer></Footer>
        </BrowserRouter>
    )
}
