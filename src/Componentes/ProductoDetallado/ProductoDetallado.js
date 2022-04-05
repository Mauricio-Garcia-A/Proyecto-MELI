import React from 'react';
//Dependencia de Estilos
import "./productoDetallado.scss";

/* Componente PRODUCTODETALLADO
    Este componente recibe por props características mas especificas del producto [Titulo, Precio, Imagen, Estado, CantidadVendida, Descripcion],
    y los muestra de una forma ordenada y determinada
*/
export default function ProductoDetallado(props) {
    return (
        <>
            <div className="ContenedorProductoDetalle">
                <div><img className="ImagenPD" src={props.Imagen} alt="img"/></div>
                <div className="ContenedorPD2">
                    <span className='formatoTextoEstadoCantidad'>{props.Estado} - {props.CantidadVendidos} vendidos</span>
                    <b className='formatoTituloProducto'>{props.Titulo}</b>
                    <span className='formatoPrecio'>$ {props.Precio}<sup className='superIndicePrecio'>00</sup></span>
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