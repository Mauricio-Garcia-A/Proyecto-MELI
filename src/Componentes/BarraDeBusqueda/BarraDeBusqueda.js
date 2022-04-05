import React from 'react';
//Paquetes Dependencias
import {Link} from 'react-router-dom';

//Componentes e Imagenes Utilizados 
import CajaDeBusqueda from '../CajaDeBusqueda/CajaDeBusqueda.js';
import Logo from "../../Imagenes/Logo_ML.png";

//Dependencia de Estilos
import "./barraDeBusqueda.scss";

/* Componente BARRADEBUSQUEDA
    Este componente cuenta con una estructura basica de un LOGO y una CAJA DE BUSQUEDA independiente.
*/
export default function BarraDeBusqueda() {
    return (
        <div className='containerEncabezado contenedorApp'>
            <Link to="/"><div className='contenedorLogo'><img src={Logo} alt="MELI"/></div></Link>
            <CajaDeBusqueda />
        </div>
    )
}
