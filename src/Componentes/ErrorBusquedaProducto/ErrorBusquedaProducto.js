import React from 'react'
import './ErrorBusquedaProducto.scss'
import IconoError from './iconoError'
import {Link} from 'react-router-dom'

export default function ErrorBusquedaProducto(props) {
    return (
        <div className='contenedorErrorBusqueda'>
            <span className='textoErrorBusqueda1'>No se han encontado resultados de la Busqueda: <b>"{props.palabraBuscada}"</b></span>
            <IconoError className='estilosIconoError' fill='red' width='60px' height='60px' />
            <h1>El producto no esta disponible</h1>
            <span className='textoErrorBusqueda2'>¡Animo! Hay millones de producto mas</span>
            <Link to="/" className='botonEstandar botonErrorBP'>Ver resultados similares</Link>
            <span className='textoErrorBusqueda3'> ↑ VOLVER AL HOME </span>
        </div>
    );
}
