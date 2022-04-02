import React from 'react';
import CajaDeBusqueda from '../CajaDeBusqueda/CajaDeBusqueda.js';
import "./barraDeBusqueda.scss";
import Logo from "../../Imagenes/Logo_ML.png";

export default function BarraDeBusqueda() {
    return (
        <div className='containerEncabezado contenedorApp'>
           <div className='contenedorLogo'><img src={Logo} alt="MELI"/></div>
           <CajaDeBusqueda />
        </div>
    )
}