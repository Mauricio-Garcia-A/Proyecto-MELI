import imag01 from '../Imagenes/ImagenesCarruselHome/imag01.jpg'
import imag02 from '../Imagenes/ImagenesCarruselHome/imag02.jpg'
import imag03 from '../Imagenes/ImagenesCarruselHome/imag03.jpg'
import imag04 from '../Imagenes/ImagenesCarruselHome/imag04.jpg'
import imag05 from '../Imagenes/ImagenesCarruselHome/imag05.jpg'
import imag06 from '../Imagenes/ImagenesCarruselHome/imag06.jpg'
import imag07 from '../Imagenes/ImagenesCarruselHome/imag07.jpg'
import imag08 from '../Imagenes/ImagenesCarruselHome/imag08.jpg'
import TDC from '../Imagenes/ImagenesCarruselHome/TDC.jpg'
import TDD from '../Imagenes/ImagenesCarruselHome/TDD.jpg'
import CST from '../Imagenes/ImagenesCarruselHome/CST.jpg'
import EFC from '../Imagenes/ImagenesCarruselHome/EFC.jpg'

export function useContenidoHome() {
    const FORMAS_DE_PAGOS = [   {titulo:'Tarjenta de Credito', icono:'TDC', informacion:TDC},
                                {titulo:'Tarjeta de Debito', icono:'TDD', informacion:TDD},
                                {titulo:'Cuotas sin Tarjeta', icono:'CST', informacion:CST},
                                {titulo:'Efectivo', icono:'Efc', informacion:EFC}
                            ]  
    const IMAGENES_PUBLICIDAD = [imag01, imag02, imag03, imag04, imag05, imag06, imag07, imag08]

    return { FORMAS_DE_PAGOS, IMAGENES_PUBLICIDAD} 
}