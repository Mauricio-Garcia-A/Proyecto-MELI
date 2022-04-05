import React, {useState, useEffect} from 'react';
//Paquetes Dependencias
import {useParams} from 'react-router-dom';

//Componentes Utilizados
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
//Dependencia de Estilos
import "./detalleDelProduto.scss";

//Importación de Servicios API
import { productoSeleccionado, productosDescripcion, categoriasSelecionadas} from '../../SeviciosApi/funciones.js'

/* Vista DETALLEDEPRODUCTOS
    La vista Detalle muestra más en detalle el producto seleccionado de la lista de productos  
*/
export default function DetalleDelProducto() {
    //Declaracion y inicalizacion de estados
    const [ producto, setProducto ] = useState({})
    const [ descripcionProducto, setDescripcionProducto ] = useState({})
    const [ categorias, setCategorias ] = useState([])
    const {id} = useParams();

/* Llamadas al servicio API: BUSCARDETALLE - Hace las peticiones necesarias a la API para obtener 
    una Detalles mas específicos del producto seleccionado de la lista de productos, y además establecer 
    las categorías de producto para ser utilizadas en el BreadCrums  
*/
  useEffect(() => {
    async function buscarDetalle () {
        let product = await productoSeleccionado(id);               //Petición Y Respuesta de los detalles del producto productos 
        let productDescription = await productosDescripcion(id);    //Petición Y Respuesta de la descripcion del producto seleccionado 
        setProducto(product)
        setDescripcionProducto(productDescription) 
        let categories = await categoriasSelecionadas(product.category_id);    //Partición y Respuesta de las Categorías del producto seleccionado
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