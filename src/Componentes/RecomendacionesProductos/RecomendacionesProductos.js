import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './RecomendacionesProductos.scss'



export default function RecomendacionesProductos({titulo='Titulo de la Seccion de Productos', productos=''}) {
    const contenedorScroll =useRef()

    const scroll = (scrollOffset) => {
        contenedorScroll.current.scrollLeft += scrollOffset
    }
    
    return (
        <div className='contenedorRecomendacionesProductos' >
            <span className='TextoTituloRP'>{titulo}</span>
            <div className='contenedorBotonesRP'>
                <button onClick={() => scroll(-216)} className='botonesRP'>{'<'}</button>
                <button onClick={() => scroll(216)} className='botonesRP'>{'>'}</button>  
            </div>
            <div className='contenedorItemsRP' ref={contenedorScroll}>
                { productos.map(producto => (
                    <Link key={producto.id}  to={`/items/${producto.id}`} className="estiloLinkRP ">  
                        <div className='ItemProductoRecomendado'>
                            <div className='imagenItemProductoRecomendado'>
                                <img  className='imagenPrductoRP' src={producto.picture} alt="img"/>
                            </div>
                            <div className='textosItemProductoRecomendado'>
                                <span className='TextoPrecioRP' >{producto.price}</span>
                                { producto.free_shipping ? <b className='TextoEnvioGratisRP' >Envío gratis</b>:<></>}
                                <span className='TextoTituloProductoRP'>{producto.title}</span>  
                            </div>
                        </div>
                    </Link>
                )) }
            </div>
        </div>
    )
}
