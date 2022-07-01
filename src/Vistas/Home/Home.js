import React from 'react';
import { useContenidoHome } from '../../Hooks/useContenidoHome';
import {useProductosRecomendados} from '../../Hooks/useProductosRecomendados';
import useSEO from '../../Hooks/useSEO';
import CarrucelImagenPublicidad from '../../Componentes/CarrucelImagenPublicidad/CarrucelImagenPublicidad'
import FormasDePagos from '../../Componentes/FormasDePagos/FormasDePagos';
import RecomendacionesProductos from '../../Componentes/RecomendacionesProductos/RecomendacionesProductos';
import './Home.scss'
import PlaceholderRecomendacionesProductos from '../../Componentes/ItemsLoading/PlaceholderRecomendacionesProductos/PlaceholderRecomendacionesProductos';


/* Vista HOME
El vista HOME no fue solicitada en el Challenge (proactividad). HOME es una componente extra se muestra un carrusel con publicidad, y las formas de pago.
*/
export default function Home() {
    useSEO({title:'HOME', description:'Bienvenidos a MeLi'})
    const {FORMAS_DE_PAGOS, IMAGENES_PUBLICIDAD} = useContenidoHome()
    const { productosOferta, productosRecomendados, seccionVisible, loadingOfertas, loadingPR }=useProductosRecomendados()

    return (
        <div >
            <CarrucelImagenPublicidad  imagenes={IMAGENES_PUBLICIDAD} autoPlay={true} />
            <div className="contenedorApp">
                <div className='ContenedorTextoTituloHome'>
                    <span> ¡Bienvenidos a MeLi, el E-commerce Lider en Compras y Ventas Digitales! </span>       
                </div>
                <FormasDePagos FDP={FORMAS_DE_PAGOS}/>
                { seccionVisible 
                    ? loadingPR ? <PlaceholderRecomendacionesProductos />
                                : <RecomendacionesProductos titulo="Basado en tu última busqueda" productos={productosRecomendados}/>
                    : <></>
                }
                { loadingOfertas    ? <PlaceholderRecomendacionesProductos />
                                    : <RecomendacionesProductos titulo="Ofertas" productos={productosOferta}/>
                }
                
            </div>
        </div>
    )
}