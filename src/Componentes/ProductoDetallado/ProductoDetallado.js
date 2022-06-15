import React from 'react';
import CarrucelImagenProducto from '../CarrucelImagenProducto/CarrucelImagenProducto';
import "./productoDetallado.scss";

/* -----------------------------------   Componente PRODUCTODETALLADO   ---------------------------------------------
    Este componente recibe por props características mas especificas del producto [Titulo, Precio, Imagenes, Estado, CantidadVendida, Descripcion],
    y los muestra de una forma ordenada y determinada
*/

export default function ProductoDetallado(props) {
    
    const tipoMoneda = props.Precio[0]
    const precioParteEntera = props.Precio[1]
    const precioParteDecimal = props.Precio[2]

    return (
        <>
            <div className="ContenedorProductoDetalle">
                <div className='contenedorImagenesProducto'>
                    <CarrucelImagenProducto imagenes={props.Imagenes} autoPlay={false}/>
                </div>
                <div className="ContenedorPD2">
                    <span className='formatoTextoEstadoCantidad'>{props.Estado} - {props.CantidadVendidos} vendidos</span>
                    <b className='formatoTituloProducto'>{props.Titulo}</b>
                    <span className='formatoPrecio'>{tipoMoneda} {precioParteEntera}<sup className='superIndicePrecio'>{precioParteDecimal}</sup></span>
                    <button className='botonComprar'>Comprar</button>                    
                </div>
            </div>
            <div className='contenedorDescripcionProducto'>
                <h3 className='tituloDescripcionProducto'>Descripción del producto</h3>
                <span className='textoDescripcionProducto'>{props.Descripcion}</span>                
            </div>
            
        </>
    )
}