import React from 'react';
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import "./detalleDelProduto.scss";
import ImagenPrueba from "../../Imagenes/imagenDePrueba.png";


export default function DetalleDelProducto() {
    return (
        <div  className='contenedorEstandarProducto'>
            <ProductoDetallado Imagen={ImagenPrueba} Estado="Nuevo" CantidadVendidos="230" Nombre="Deco Reverse Sombrero Oxford" Precio="1.980" Descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non."/>
        </div>
    )
}