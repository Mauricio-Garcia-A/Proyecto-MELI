import React from 'react';
import "./cajaDeBusqueda.scss";
import IconoBusqueda from "../../Imagenes/ic_Search.png";
import {Link, useSearchParams} from 'react-router-dom';

export default function CajaDeBusqueda(){
  let [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
      let search = e.target.value;
      if (search) {
          setSearchParams({ search });
      } else {
          setSearchParams({});
      }
   };
  return (
    <div className='contenedorFormularioBusqueda'>
      <input className='inputBusqueda' 
        placeholder="Nunca dejes de buscar"
        type="text"
        value={searchParams.get("search") || ""}
        onChange={handleChange}
      />
      <Link to={`/items?${searchParams}`}><div className='buttomBusqueda'><img src={IconoBusqueda} alt="B"/></div></Link>
    </div>
  );
}
  
  


