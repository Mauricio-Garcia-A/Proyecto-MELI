import React from "react";
import IconoPieDePagina from "./IconoPieDePagina";
import "./PieDePagina.scss"

const INFORMACION_OPCIONES = [
    {titulo:"Acerca de Nosotros", opciones:[{titulo:'informacion', dato:"Info MeLi"}]},
    {titulo:"Redes Sociales", opciones:[ {titulo:'instagram',dato:"@MeLi-IG"},
                                         {titulo:'facebook',dato:"@MeLi-FB"}]},
    {titulo:"Ayuda", opciones:[ {titulo:'compras',dato:"Compras"}, 
                                {titulo:'ventas',dato:"Ventas"},
                                {titulo:'problemas',dato:"Resolucion de Problemas"}]}
]


/* -----------------------------------   Componente PIEDEPAGINA  ---------------------------------------------
    Este componente solo muestra informacion de interes que suele estar en los footers. (No fue solicitado en el CHALLENGE de MeLi - Tarea PROACTIVA)
*/

export default function PieDePagina() {

    function ItemDeInformacion(props){
        return(
            <div className="itemsDeInformacion">
                <b>{props.title}</b><br/>
                {props.links.map((lk, e)=>{
                    return(<div key={"lk"+e} className='contenedorLinkPDP'> <IconoPieDePagina className='estiloIconoPieDePagina' titulo={lk.titulo} fill='#929295' width='17px' height='17px' /> <a className="textLinks" href="/#">{lk.dato}</a></div>)})}
            </div>  
        )
    }

    return(
        <>
            <div className="containerOpcionesPieDePagina contenedorApp">
                {INFORMACION_OPCIONES.map((opcion,i)=>{ 
                    return(
                        <ItemDeInformacion title={opcion.titulo} links={opcion.opciones} key={"ItemInfo"+i}/>
                    )
                })}                
            </div>
            <div className="containerInformacionPieDePagina contenedorApp">
                <span>Copyright © 1989-2022 MeLi M.A.G</span><br/>
                <span>Diagonal 113, N476, CP1900, LA PLATA - BUENOS AIRES - ARGENTINA</span>
            </div>
        </>
    )
}
