import React, { useState } from 'react';
//Paquetes Dependencias
import { Link, useSearchParams } from 'react-router-dom';

//Componentes o Imagenes Utilizados
import IconoBusqueda from "../../Imagenes/ic_Search.png";

//Dependencia de Estilos
import "./cajaDeBusqueda.scss";

/* Componente CAJADEBUSQUEDA
   Este componente permite ingresar y capturar el texto de la consulta sobre el producto a buscar, 
   y lo envia por searchParams a otro componente.
*/
export default function CajaDeBusqueda(){
  //Declaracion y inicalizacion de estados
  const [ search, setSearch ] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  /*  la funcion handleChange setea en los estados "seach" y "searchParams" lo ingresado en el input de busqueda
  */
  const handleChange = (e) => {
    const search = e.target.value;
    setSearch(search)
    setSearchParams(search)
  }

  return (
    <div className='contenedorFormularioBusqueda'>
      <input className='inputBusqueda' 
        placeholder="Nunca dejes de buscar"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <Link to={`/items?search=${searchParams}`}><div className='buttomBusqueda'><img src={IconoBusqueda} alt="B"/></div></Link>
    </div>
  );
}
  
  


