import React, { useState } from 'react';
import IconoFormaDePago from './IconoFormaDePago';
import './FormasDePagos.scss'

export default function ItemFormaDePago({Titulo, Icono, Informacion}) {
    const [contenidovisible, setContenidoVisible]=useState(false)

    const handleChange=()=>{
        setContenidoVisible(!contenidovisible)
    }

    return (
        <div  className='contenedoFDP'>
            <div className='IconoFDP'><IconoFormaDePago titulo={Icono} fill='#099cb9' width='40px' height='40px' /></div>
            <div className='contenedorDatosFDP'>
                <b>{Titulo}</b>
                <button className='BotonVerMasFDP' onClick={handleChange}>{contenidovisible? 'Ver menos':'Ver mas'}</button>
                <img src={Informacion} alt='img' className={contenidovisible? 'informacionFDP':'informacionFDP noVisible'}/>
            </div>
            
        </div>
    )
}
