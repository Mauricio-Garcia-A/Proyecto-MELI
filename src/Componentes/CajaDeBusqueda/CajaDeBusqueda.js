import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import IconoBusqueda from "../../Imagenes/ic_Search.png";
import "./cajaDeBusqueda.scss";


/*-----------------------------   Componente CAJADEBUSQUEDA   ---------------------------------

Este componente permite ingresar y capturar el texto de la consulta sobre el producto a buscar, 
y lo envia por searchParams a otro componente.                                                  */ 

export default function CajaDeBusqueda(){
  const [keyword, setKeyword ] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setKeyword(e.target.value)                   // Se guarda en el estado Keyword la palabra buscada en el input
  }

  const handleSubmit = e => {
    e.preventDefault()                           // Evento para evitar su comportamiento por defecto que borra el contenido al buscar
    navigate(`/items?search=${keyword}`)        //  Navegar hacia Resultados 
 }

  return (
    <>
      <form onSubmit={handleSubmit} className='contenedorFormularioBusqueda'>
        <input 
          className='inputBusqueda'
          placeholder="Nunca dejes de buscar"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <button className='buttomBusqueda'><img src={IconoBusqueda} alt="B"/></button>
      </form>
    </>
  );
};