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
    const [ producto, setProducto ] = useState({});
    const [ descripcionProducto, setDescripcionProducto ] = useState("");
    const [ categorias, setCategorias ] = useState([]);
    const [ fotoProducto, setFotoProducto] = useState("");
    const {id} = useParams();

/* Llamadas al servicio API: BUSCARDETALLE - Hace las peticiones necesarias a la API para obtener 
    una Detalles mas específicos del producto seleccionado de la lista de productos, y además establecer 
    las categorías de producto para ser utilizadas en el BreadCrums  
*/
  useEffect(() => {
    async function buscarDetalle () {
        let product = await productoSeleccionado(id);               //Petición Y Respuesta de los detalles del producto productos 
        let productDescription = await productosDescripcion(id);    //Petición Y Respuesta de la descripcion del producto seleccionado 
        setProducto(product);
        setFotoProducto(product.pictures[0].secure_url);
        setDescripcionProducto(productDescription) ;
        let categories = await categoriasSelecionadas(product.category_id);    //Partición y Respuesta de las Categorías del producto seleccionado
        setCategorias(categories) 
    }
    buscarDetalle()
    }, [id])

    return (
        <>
            <BreadCrumbs Categorias={categorias} />
            <div  className='contenedorEstandarProducto'>
                <ProductoDetallado  Imagen={fotoProducto} 
                                    Estado={producto.value_name} 
                                    CantidadVendidos={producto.sold_quantity} 
                                    Titulo={producto.title} 
                                    Precio={producto.price} 
                                    Descripcion={descripcionProducto}
                />
            </div>
            <br />
        </>
    )
}