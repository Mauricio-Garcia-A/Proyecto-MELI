import React from 'react';
//Paquetes Dependecias
import {Link} from 'react-router-dom'

/* Vista ERROR
    En el componente ERROR solo se informara que la ruta no existe y te dará acceso nuevamente al HOME
*/
export default function Error() {
    return (
        <div style={{ height:"1000px"}}>
            <h1 style={{ color:"grey"}}> ERROR: La ruta no existe </h1>
            <Link to="/">Volver al HOME</Link>
        </div>
    )
}