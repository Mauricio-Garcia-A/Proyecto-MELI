import React, { useEffect, useState } from 'react';
import './CarrucelImagenPublicidad.scss'

/* ---------------------------   Componente CARRUSELIMAGENESPRODUCTO -----------------------------------------
Este muesta las imagenes de los productos de forma dinamica (CARRUSEL)
    - recibe por props un array con las URL de las IMAGENES 
    - opcional recibe props la funcionalidad mostrar las imagenes automaticamente cada sierto tiempo, mediate las props AUTOPLAY y TEMPORIZADOR  
*/    
export default function CarrucelImagenPublicidad({imagenes, autoPlay=false, temporizador='5000'  }) {  
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImagen, setSelectedImagen]=useState(imagenes[0])
    const [loaded, setLoaded]=useState(false)
    
    const seleccionarSiguienteImagen = (index, images, siguiente) =>{                        // ---- LOGICA PRICIPAL DEL CARRUSEL ----
        setLoaded(false)
        setTimeout(()=>{
            const condition = siguiente     ? (index < images.length -1)                         // Verifica siguiente imagen existe (si me encuentro en limite superior de array)
                                            : (index > 0)                                        // Verifica anterior imagen existe (si me encuentro en limite inferior de array)
            const nextIndex = siguiente     ? condition ? index + 1                              // Si SIGIENTE=true y CONDICION=true entonces avanso una posicion
                                                        : 0                                      // Si SIGIENTE=true y CONDICION=false (el indice esta en el limite superio del array) entonces se posiciona el indice en el principio
                                            : condition ? index - 1                              // Si SIGIENTE=false y CONDICION=true entonces retrocedo una posicion
                                                        : images.length - 1                      // Si SIGIENTE=false y CONDICION=false (el indice esta en el limite inferior del array) entonces se posiciona el indice en el final
            selectPosition(nextIndex, images)            
        }, 500)
    }

    const previous=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, false)
    }
    const next=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, true)
    }
   
    const selectPosition=(index, images)=>{
        setSelectedIndex(index)
        setSelectedImagen(images[index])
    }        
    
    useEffect(()=>{
        if (autoPlay){
            const intervalo = setInterval(()=>{
                seleccionarSiguienteImagen(selectedIndex, imagenes, true)
            }, temporizador)
            return ()=> clearInterval(intervalo)
        }
    })

    return (
        <div className='contenedorCarruselHome'>
            <div className='contenedorBotonesCarruselHome'>
                 <div className='contenedorBotonesDeControlCarruselHome'>
                    <button onClick={previous} className='botonFlechaHome botonDerecha'>{'<'}</button>
                    <button onClick={next} className='botonFlechaHome botonIzquierda' >{'>'}</button>
                </div>
                <div className='contenedorBotonesDeSeleccionCarruselHome'>
                    {imagenes.map((imagen, i)=>{
                        return(<button key={"bsh"+i} onClick={()=>selectPosition(i,imagenes)} className={(i===selectedIndex)?'botonSelectorHome activeSelect ':'botonSelectorHome'} />)
                    })}
                </div>
            </div>
            <div className='sliderImagenHome'>
                <img className={loaded?'imagenCarruselHome loaded': 'imagenCarruselHome'} src={selectedImagen} alt="img" onLoad={()=> setLoaded(true) }/>
             </div>
            <br />
        </div>
    );
}
