import React, { useContext, useEffect, useState } from 'react';
import ProductosContext from '../../../Contexto/ProductosContext';
import IconoCarruselFoto from './iconoCarruselFoto';
import './PlaceholderDetalleDeProducto.scss'

/* -------------------------  Componente PLACEHOLDER DETALLE PRODUCTO  -----------------------------
    Este componente se muestra durante el tiempo que la Vista 'DetalleDeProducto' este cargando (tiempo Peticion API)
    En este caso Placeholder de Detalle de producto es dinamico, es decir, muestra contenido ya cargado en el CONTEXTO como el titulo, el precio, etc. 
    Para mostrarle al usuario usuario algo de informacion mietras cargada el resto. De no ser posible acceder a esa informacion, muestra el placeholder estatico
*/
export default function PlaceholderDetalleDeProducto({productoID=''}) {
    const productoDefault = {title: 'Titulo del producto', price: {decimal:' $ 0.000,00' }, picture: 'http://#', condition: '#####' }           // Producto Default Hardcodeado
    const [producto, setProducto] = useState(productoDefault)
    const {products}= useContext(ProductosContext)
    const [seccionDinamica, setSeccionDinamica]= useState(false)

    useEffect(()=>{
        if (productoID !== '') {                                                                            // Si el ID traido por prop es vacio seteo en false la SeccionDinamica, para asi mostrar el placeholder estatico...
            if (products.length !== 0) {                                                                    // Si los products del contexto es vacio seteo en false la SeccionDinamica, para asi mostrar el placeholder estatico. Y si no, seteo en true seccionDinamica y seteo el product del contexto en el estado producto
                const productoSeleccionado = products.find(product => product.id === productoID)
                setProducto(productoSeleccionado)
                setSeccionDinamica(true)
            } else {
                setSeccionDinamica(false)
            }
        } else {
            setSeccionDinamica(false)
        }    
    },[])

    const tipoMoneda = producto.price.decimal.split(' ')[0]                                 // Extraer el tipo de moneda
    const precioParteEntera = producto.price.decimal.split(' ')[1].split(',')[0]            // Extraer valor Entero del precio
    const precioParteDecimal = producto.price.decimal.split(' ')[1].split(',')[1]           // Extraer los decimales del precio

    return (
        <div>
            
            <div className='placeholderBreadCrumbsConteiner'> 
                <div className='placeholderBreadCrumbs' style={{ width:'180px' }}></div>
                <div className='placeholderBreadCrumbs' style={{ width:'90px' }}></div>
                <div className='placeholderBreadCrumbs' style={{ width:'11vw' }}></div> 
            </div>

            <div  className='contenedorEstandarProducto'>
                <div className="ContenedorProductoDetalle">
                    <div className='contenedorImagenesProducto'>

                        <div className='PlaceholderCarrusel'> 
                            <div className='contenedorBotonesFotosCarruselPlaceholder'>
                                <b className='botonFlechaPlaceholder'>{'<'}</b>
                                <div className='imagenCarruselPlaceholder'>
                                    <img src={producto.picture} className='imagenPlaceholderDDP' alt=''/>
                                    <IconoCarruselFoto width='70%' className='iconoImagenPlaceholderDDP' />
                    
                                </div>
                                <b  className='botonFlechaPlaceholder'>{'>'}</b>
                            </div>
                            <div className='contenedorBotonesDeSeleccionCarruselPlaceholder'>
                                <div className={'botonSelectorPlaceholder'} style={{ background:'rgb(100, 100, 100)', border:'3px rgb(100, 100, 100) solid'}}><IconoCarruselFoto width='40px' fill='white' className='imagenSelectorPlaceholder'  /></div>
                                <div className={'botonSelectorPlaceholder'} ><IconoCarruselFoto width='40px' fill='white' className='imagenSelectorPlaceholder' /></div>
                                <div className={'botonSelectorPlaceholder'} style={{opacity:'0.8'}}><IconoCarruselFoto width='40px' fill='white' className='imagenSelectorPlaceholder' /></div>
                                <div className={'botonSelectorPlaceholder'} style={{opacity:'0.6'}}><IconoCarruselFoto width='40px' fill='white' className='imagenSelectorPlaceholder'  /></div>
                            </div>
                        </div>

                    </div>
                    <div className="ContenedorPD2" >
                        {seccionDinamica 
                            ?   <>
                                    <span className='formatoTextoEstadoCantidad'>{producto.condition} - <b className='placeholderTextTitulo'>000</b> vendidos</span>
                                    <b className='formatoTituloProducto'>{producto.title}</b>
                                    <span className='formatoPrecio'>{tipoMoneda} {precioParteEntera}<sup className='superIndicePrecio'>{precioParteDecimal}</sup></span>
                                    <button className='botonComprar' disabled ={true} style={{background:'rgb(200, 200, 200)'}}>Comprar</button>      
                                </>
                            :   <>
                                    <div className='placeholderSubtitulo' style={{ width:'13vw' }} />
                                    <div className='placeholderTitulo' style={{ minWidth:'300px', width:'100%' }} />
                                    <div className='placeholderTitulo' style={{ width:'10vw' }} />
                                    <div className='placeholderPrecio'style={{ width:'120px' }} />
                                    <button className='botonComprar' disabled ={true} style={{background:'rgb(200, 200, 200)'}}>Comprar</button>      
                                </>
                        }
                    </div>
                </div>
                <div className='contenedorDescripcionProducto'>
                    <h3 className='tituloDescripcionProducto'>Descripción del producto</h3>
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'30%' }}></div>
                    <br />
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'90%' }}></div>
                    <div className='placeholderTextDescription' style={{ width:'10%' }}></div>
                </div>
            </div>
        </div>
    );
}
