import React from 'react';
import IconoCarruselFoto from './iconoCarruselFoto';
import './PlaceholderDetalleDeProducto.scss'


export default function PlaceholderDetalleDeProducto({Titulo, Precio}) {
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
                                    <IconoCarruselFoto width='70%' fill='white' />
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
                    <div className="ContenedorPD2">
                        <span className='formatoTextoEstadoCantidad'>#### - #### vendidos</span>
                        <b className='formatoTituloProducto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</b>
                        <span className='formatoPrecio'>$ 0.000,00</span>
                        <button className='botonComprar' disabled ={true} style={{background:'rgb(200, 200, 200)'}}>Comprar</button>                    
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

                      <div>
                        
                    </div>     

                </div>
            </div>
        </div>
    );
}
