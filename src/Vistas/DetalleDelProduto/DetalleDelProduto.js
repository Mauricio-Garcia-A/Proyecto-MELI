import React, {useState, useEffect} from 'react';
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
import {useParams} from 'react-router-dom';
import { productoSeleccionado, productosDescripcion, categoriasSelecionadas} from '../../SeviciosApi/funciones.js'

import "./detalleDelProduto.scss";

export default function DetalleDelProducto() {
    const [ producto, setProducto ] = useState({})
    const [ descripcionProducto, setDescripcionProducto ] = useState({})
    const [ categorias, setCategorias ] = useState([])
    const {id} = useParams();

  useEffect(() => {
    async function buscarDetalle () {
        let product = await productoSeleccionado(id);
        let productDescription = await productosDescripcion(id);
        setProducto(product)
        setDescripcionProducto(productDescription)
        let categories = await categoriasSelecionadas(product.category_id);
        setCategorias(categories) 
    }
    buscarDetalle()
    }, [id])

    console.log(producto)
    console.log(descripcionProducto)
    console.log(categorias)

    const descripcionHardcodeados= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.,"
    return (
        <>
            <BreadCrumbs Categorias={categorias} />
            <div  className='contenedorEstandarProducto'>
                
                                {/* Imagen={producto.pictures[0].secure_url}*/ }
                <ProductoDetallado  Imagen={producto.thumbnail} 
                                    Estado={producto.value_name} 
                                    CantidadVendidos={producto.sold_quantity} 
                                    Titulo={producto.title} 
                                    Precio={producto.price} 
                                    Descripcion={descripcionHardcodeados}
                />
            </div>
            <br />
        </>
    )
}