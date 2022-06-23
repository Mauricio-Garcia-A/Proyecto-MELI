import React, {useEffect} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import useSEO from '../../Hooks/useSEO'    
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
import "./detalleDelProduto.scss";
import {useDetalleProducto} from '../../Hooks/useDetalleProducto.js'
import PlaceholderDetalleDeProducto from '../../Componentes/ItemsLoading/PlaceholderDetalleDeProducto/PlaceholderDetalleDeProducto';

/* -------------------------  Vista DETALLEDEPRODUCTO  -----------------------------
    En esta vista se muestra las caracteristicas mas importantes de UN PRODUCTO
*/

export default function DetalleDelProducto() {
    useEffect(() => {
        window.scrollTo(0, 0)                                                                                           // Scrollea al arriba de todo, al iniciar la pagina
    }, [])

    const {id} = useParams();                                                                                           // Extraigo ID de la URL
    const {product, description, categories, price, pictures, loading, error} = useDetalleProducto({id})                // Extraigo de la customHook useDetalleProducto los parametros necesarios
    
    const tituloSeoDDP = loading ? 'Cargando...' : `Producto "${product.title}"`
    const descripcionSeoDDP = `Descripcion de producto ${product.title}`
    useSEO({title: tituloSeoDDP, description: descripcionSeoDDP})  

    if (error) return <Navigate to='/404' />                                                                            // En caso de error en la peticion a la API, navegar a la pagina de error 404
    
    return (
        <div className="contenedorApp">
            {loading 
                ?<PlaceholderDetalleDeProducto 
                    productoID={id}  
                />
                :<>
                    <BreadCrumbs Categorias={categories} />
                    <div  className='contenedorEstandarProducto'>
                        <ProductoDetallado Imagenes={pictures}                  
                                            Estado={product.condition} 
                                            CantidadVendidos={product.sold_quantity} 
                                            Titulo={product.title} 
                                            Precio={price}                     
                                            Descripcion={description}                 
                        />
                    </div>
                </>
            }
            
        </div>
    )
}