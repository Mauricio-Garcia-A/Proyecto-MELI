import React from 'react';
import {Link} from 'react-router-dom'                           //Paquetes Dependecias
import useSEO from '../../Hooks/useSEO'

/* Vista ERROR
    En el componente ERROR solo se informara que la ruta no existe y te dará acceso nuevamente al HOME
*/
export default function Error() {
    useSEO({title:'ERROR 404', description: 'Error 404'})
    return (
        <div style={{ height:"1000px"}} className="contenedorApp">
            <h1 style={{ color:"rgb(255, 42, 42)"}}> ERROR: La ruta no existe </h1>
            <Link to="/">Volver al HOME</Link>
        </div>
    )
}