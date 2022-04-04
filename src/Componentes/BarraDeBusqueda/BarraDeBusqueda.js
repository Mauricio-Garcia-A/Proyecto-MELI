import React from 'react';
import CajaDeBusqueda from '../CajaDeBusqueda/CajaDeBusqueda.js';
import "./barraDeBusqueda.scss";
import Logo from "../../Imagenes/Logo_ML.png";
import {Link} from 'react-router-dom'

export default function BarraDeBusqueda() {
    return (
        <div className='containerEncabezado contenedorApp'>
            <Link to="/"><div className='contenedorLogo'><img src={Logo} alt="MELI"/></div></Link>
            <CajaDeBusqueda />
        </div>
    )
}
