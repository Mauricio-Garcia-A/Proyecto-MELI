import React from 'react';
import "./vistaPreliminarProducto.scss";
import IconoEnvio from "../../Imagenes/ic_shipping.png";

export default function VistaPreliminarProducto(props) {
    return (
        <div className='contenedorVistaPreliminarProducto'>
           <div><img  className='imagenPreliminarPrducto' src={props.Imagen} alt="img"/></div>
           <div className='contenedorVPP2'>
                <div className='contenedorVPP3'>
                    <span className='formatoPrecio'>$ {props.Precio} </span>
                    <img className='iconoEnvio' src={IconoEnvio} alt="E"/>    
                </div>
                <span className='formatoNombreProducto'>{props.Nombre}</span>  
           </div>
           <div className='contenedorVPP4'>
               <span className='formatoTextoCiudad'>{props.Ciudad}</span>
            </div>
        </div>
    )
}