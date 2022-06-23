import React from 'react';
import { useContenidoHome } from '../../Hooks/useContenidoHome';
import useSEO from '../../Hooks/useSEO';
import CarrucelImagenPublicidad from '../../Componentes/CarrucelImagenPublicidad/CarrucelImagenPublicidad'
import FormasDePagos from '../../Componentes/FormasDePagos/FormasDePagos';
import './Home.scss'

/* Vista HOME
El vista HOME no fue solicitada en el Challenge (proactividad). HOME es una componente extra se muestra un carrusel con publicidad, y las formas de pago.
*/
export default function Home() {
    useSEO({title:'HOME', description:'Bienvenidos a MeLi'})
    const {FORMAS_DE_PAGOS, IMAGENES_PUBLICIDAD} = useContenidoHome()

    
    return (
        <div >
            <CarrucelImagenPublicidad  imagenes={IMAGENES_PUBLICIDAD} autoPlay={true} />
            <div className="contenedorApp">
                <div className='ContenedorTextoTituloHome'>
                    <span className='TextoTituloHome'> ¡Bienvenidos a MeLi, el E-commerce Lider en Compras y Ventas Digitales! </span>       
                </div>
                <FormasDePagos FDP={FORMAS_DE_PAGOS}/>
            </div>
        </div>
    )
}