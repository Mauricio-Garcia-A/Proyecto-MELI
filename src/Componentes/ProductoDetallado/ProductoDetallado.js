import React from 'react';
import CarrucelImagenProducto from '../CarrucelImagenProducto/CarrucelImagenProducto';
import VentanaModal from '../VentanaModal/VentanaModal';
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
                    <VentanaModal textoBoton='Comprar' estilosBoton='botonComprar' titulo='Proceso de Compra'>
                        <ContenidoModal />
                    </VentanaModal>                
                </div>
            </div>
            <div className='contenedorDescripcionProducto'>
                <h3 className='tituloDescripcionProducto'>Descripción del producto</h3>
                <span className='textoDescripcionProducto'>{props.Descripcion}</span>                
            </div>
            
        </>
    )
}


const ContenidoModal= () => {
    return(
        <div className='contenidoModal'>
            <span>¡Hola! Para comprar, ingresá a tu cuenta</span>
            <div className='imgPerfil'>
            <svg  width="90" height="90px" fill="rgba(255, 255, 255, 0.7)" style={{padding:'5px'}}  viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <span>Ingresá tu e-mail o usuario</span>
            <input placeholder="Teléfono, e-mail o usuario"></input>
            <button className='botonEstandar'>Continuar</button>
            <button className='b2'>Crear cuenta</button>
            <a href='/' className='b1'>Volver al HOME</a>  
        </div>
    )
}