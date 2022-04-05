import React from 'react';
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import "./detalleDelProduto.scss";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { productoSeleccionado, productosDescripcion } from '../../SeviciosApi/funciones.js'
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs.js';

export default function DetalleDelProducto() {
    const [ producto, setProducto ] = useState({})
    const [ descripcionProducto, setDescripcionProducto ] = useState({})
    const { id } = useParams();

    useEffect(() => {
        async function buscarDetalle () {
            let product = await productoSeleccionado(id);
            let productDescription = await productosDescripcion(id);
            setProducto(product)
            setDescripcionProducto(productDescription);  
        }
        buscarDetalle()
    }, [id])

    return (
        <>
            <BreadCrumbs />
            <div  className='contenedorEstandarProducto'>
                <ProductoDetallado Imagen={producto.pictures[0].secure_url} Estado={producto.value_name} CantidadVendidos={producto.sold_quantity} Titulo={producto.title} Precio={producto.price} Descripcion={descripcionProducto}/>
            </div>
            <br />
        </>
    )
}