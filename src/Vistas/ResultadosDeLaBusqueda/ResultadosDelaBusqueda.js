import React from 'react';
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js';
import "./resultadosDelaBusqueda.scss";
import ImagenPrueba from "../../Imagenes/imagenDePrueba.png";

export default function ResultadosDelaBusqueda() {
    return (
        <div className='contenedorEstandarProducto'>
            <VistaPreliminarProducto Imagen={ImagenPrueba} Precio="1.980" Nombre="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!" Ciudad="Capital Federal"/>
            <hr className='lineaDeSeparacion' />
            <VistaPreliminarProducto Imagen={ImagenPrueba} Precio="1.980" Nombre="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!" Ciudad="Capital Federal"/>
        </div>
    )
}