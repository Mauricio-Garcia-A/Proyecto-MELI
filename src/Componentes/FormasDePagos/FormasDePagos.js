import React from 'react'
import ItemFormaDePago from './ItemFormaDePago'
import './FormasDePagos.scss'

export default function FormasDePagos({FDP}) {
    return (
    <div className='contenedorEstandarProducto'>
        <span className='TituloFDP'>Formas de Pago</span>
        <hr className='lineaHome'/>
        <div className=' ContenedorListadoFDP'>
            {FDP.map((fdp,i)=>{   
                return  <ItemFormaDePago key={'fdp'+i} Titulo={fdp.titulo} Icono={fdp.icono} Informacion={fdp.informacion}/>
            })}    
        </div>

    </div>
    )
} 