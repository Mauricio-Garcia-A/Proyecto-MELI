import React from 'react';
import {Link} from 'react-router-dom'


export default function Error() {
    return (
        <div style={{ height:"1000px"}}>
            <h1 style={{ color:"grey"}}> ERROR: La ruta no existe </h1>
            <Link to="/">Volver al HOME</Link>
        </div>
    )
}