import React from 'react';
//Paquetes Dependecias
import {Link} from 'react-router-dom'

/* Vista ERROR
    En el componente ERROR solo se informara que la ruta no existe y te dará acceso nuevamente al HOME
*/
export default function Error() {
    return (
        <div style={{ height:"1000px"}} className="contenedorApp">
            <h1 style={{ color:"rgb(255, 42, 42)"}}> ERROR: La ruta no existe </h1>
            <Link to="/">Volver al HOME</Link>
        </div>
    )
}