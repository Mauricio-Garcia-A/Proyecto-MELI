import React from 'react';
import "./productoDetallado.scss";

export default function ProductoDetallado(props) {
    return (
        <div>
            <div className="ContenedorProductoDetalle">
                <div ><img className="ImagenPD" src={props.Imagen} alt="img"/></div>
                <div className="ContenedorPD2">
                    <span className='formatoTextoEstadoCantidad'>{props.Estado} - {props.CantidadVendidos} vendidos</span>
                    <b className='formatoNombreProducto'>{props.Nombre}</b>
                    <span className='formatoPrecio'>$ {props.Precio}<sup className='superIndicePrecio'>00</sup></span>
                    <button className='botonComprar'>Comprar</button>                    
                </div>
            </div>
            <div className='contenedorDescripcionProducto'>
                <h3 className='tituloDescripcionProducto'>Descripción del producto</h3>
                <span className='textoDescripcionProducto'>{props.Descripcion}</span>                
            </div>

        </div>
    )
}