import React from 'react';
import IconoCarruselFoto from '../PlaceholderDetalleDeProducto/iconoCarruselFoto';

import './PlaceholderRecomendacionesProductos.scss'
export default function PlaceholderRecomendacionesProductos() {

    return (
        <div className='contenedorRecomendacionesProductosPH' >
            <div className='TextoTituloRPPH' />
            <div className='contenedorItemsRPPH'>
                { ['PH1','PH2','PH3','PH4'].map(producto => (
                        <div key={producto} className='ItemProductoRecomendadoPH'>
                            <div className='imagenItemProductoRecomendadoPH'>
                                <IconoCarruselFoto width='70%'className='iconoImagenPlaceholderRP' />
                            </div>
                            <div className='textosItemProductoRecomendadoPH'>
                                <div className='TextoPrecioRPPH' />
                                <div className='TextoEnvioGratisRPPH' />
                            </div>
                        </div>
                )) }
            </div>
        </div>
    )
}

