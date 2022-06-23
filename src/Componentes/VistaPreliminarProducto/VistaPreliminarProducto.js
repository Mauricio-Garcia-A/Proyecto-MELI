import React from 'react';
import IconoEnvio from "../../Imagenes/ic_shipping.png";                            //Componentes Utilizados
import "./vistaPreliminarProducto.scss";                                            //Dependencia de Estilos

/* --------------------------------  Componente VISTA PRELIMINAR PRODUCTO  ----------------------------------------------
    Este componente recibe por props características propias del producto [Titulo, Precio, EnvioGratis, Imagen, Ciudad],
    y los muestra de una forma ordenada y con estilos determinados
*/
export default function VistaPreliminarProducto(props) {
    return (
        <div className='contenedorVistaPreliminarProducto'>
           <><div  className='ContenedorImagenPreliminarPrducto'><img  className='imagenPreliminarPrducto' src={props.Imagen} alt="img"/></div></>
           <div className='contenedorVPP2'>
                <div className='contenedorVPP3'>
                    <span className='formatoPrecio'>{props.Precio}</span>
                    <span style={{ visibility: props.EnvioGratis ? "visible" :"hidden" }}> <img className='iconoEnvio' src={IconoEnvio} alt="E"/> </span>    
                </div>
                <span className='formatoTituloProducto'>{props.Titulo}</span>  
           </div>
           <div className='contenedorVPP4'>
               <span className='formatoTextoCiudad'>{props.Ciudad}</span>
            </div>
        </div>
    )
}