import React, { useEffect, useState } from 'react';
import './CarrucelImagenProducto.scss'
import SliderImagen from './SliderImagen';

/* ---------------------------   Componente CARRUSELIMAGENESPRODUCTO -----------------------------------------
Este muesta las imagenes de los productos de forma dinamica (CARRUSEL)
    - recibe por props un array con las URL de las IMAGENES 
    - opcional recibe props la funcionalidad mostrar las imagenes automaticamente cada sierto tiempo, mediate las props AUTOPLAY y TEMPORIZADOR  
*/    
export default function CarrucelImagenProducto({imagenes, autoPlay=false, temporizador='5000'  }) {  
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImagen, setSelectedImagen]=useState(imagenes[0])
    
    const seleccionarSiguienteImagen = (index, images, siguiente) =>{                        // ---- LOGICA PRICIPAL DEL CARRUSEL ----
        const condition = siguiente     ? (index < images.length -1)                         // Verifica siguiente imagen existe (si me encuentro en limite superior de array)
                                        : (index > 0)                                        // Verifica anterior imagen existe (si me encuentro en limite inferior de array)
        const nextIndex = siguiente     ? condition ? index + 1                              // Si SIGIENTE=true y CONDICION=true entonces avanso una posicion
                                                    : 0                                      // Si SIGIENTE=true y CONDICION=false (el indice esta en el limite superio del array) entonces se posiciona el indice en el principio
                                        : condition ? index - 1                              // Si SIGIENTE=false y CONDICION=true entonces retrocedo una posicion
                                                    : images.length - 1                      // Si SIGIENTE=false y CONDICION=false (el indice esta en el limite inferior del array) entonces se posiciona el indice en el final
        selectPosition(nextIndex, images)
    }

    const previous=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, false)
        scrollPrositionIntoView(selectedIndex)                          
    }
    const next=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, true)
        scrollPrositionIntoView(selectedIndex) 
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

    const scrollPrositionIntoView = (id)=> {
        const element = document.getElementById("bsi"+id);
        element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }

    return (
        <div className='contenedorCarrusel'>
            <div className='contenedorBotonesCarrusel'>
                 <div className='contenedorBotonesDeControlCarrusel'>
                    <button onClick={previous} className='botonFlecha'>{'<'}</button>
                    <button onClick={next} className='botonFlecha'>{'>'}</button>
                </div>
                <div className='contenedorBotonesDeSeleccionCarrusel'>
                    {imagenes.map((imagen, i)=>{
                            return(<button id={"bsi"+i} key={"bsi"+i} onClick={()=>selectPosition(i,imagenes)} className={(i===selectedIndex)?'botonSelector active':'botonSelector'} ><img src={imagen} alt='img' className='imagenMiniaturaProductoBoton' ></img> </button>)
                    })}
                </div>

            </div>
            
            <div>
                <SliderImagen urlImagen={selectedImagen}/>
            </div>
            <br />
        </div>
    );
}
