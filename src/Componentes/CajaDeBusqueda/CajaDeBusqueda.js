import React from 'react';
import "./cajaDeBusqueda.scss";
import IconoBusqueda from "../../Imagenes/ic_Search.png";
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react'

export default function CajaDeBusqueda(){
  const [ search, setSearch ] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

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
  
  


