import React from "react";
import "./PieDePagina.scss"

const INFORMACION_OPCIONES = [
    {titulo:"Acerca de Nosotros", opciones:["Info MeLi"]},
    {titulo:"Redes Sociales", opciones:["IG: @MeLi-IG","FB: @MeLi-FB"]},
    {titulo:"Ayuda", opciones:["Compras","Ventas","Resolucion de Problemas"]}
]

export default function PieDePagina() {

    function ItemDeInformacion(props){
        return(
            <div key={props.id} className="itemsDeInformacion">
                <b>{props.title}</b><br/>
                {props.links.map((lk, e)=>{
                    return(<div key={"lk"+e} ><a className="textLinks" href="/#">{lk}</a></div>)})}
                
            </div>  
        )
    }

    return(
        <>
            <div className="containerOpcionesPieDePagina contenedorApp">
                {INFORMACION_OPCIONES.map((opcion,i)=>{ 
                    return(
                        <ItemDeInformacion title={opcion.titulo} links={opcion.opciones} id={"op"+i}/>
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
