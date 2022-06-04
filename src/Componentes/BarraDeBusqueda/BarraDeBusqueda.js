import React from 'react';
import {Link} from 'react-router-dom';
import CajaDeBusqueda from '../CajaDeBusqueda/CajaDeBusqueda.js';
import Logo from "../../Imagenes/Logo_ML.png";
import "./barraDeBusqueda.scss";

/* ---------------------------   Componente BARRADEBUSQUEDA  -----------------------------------------
Este componente cuenta con una estructura basica:
    - Un LOGO que nos redirije al HOME al hacer click en el
    - Una CAJA DE BUSQUEDA donde se puede ingresar el keyword a buscar                                                           */

export default function BarraDeBusqueda() {
    return (
        <div className='containerEncabezado contenedorApp'>
            <Link to="/"><div className='contenedorLogo'><img src={Logo} alt="MELI"/></div></Link>
            <CajaDeBusqueda />
        </div>
    )
};