import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
        window.scrollTo(0, 0)                                                                                   // Scrollea al arriba de todo, al iniciar la pagina
    }, [])

    const {id} = useParams();                                                                                   // Extraigo ID de la URL
    const {product, description, categories, price, pictures, loading} = useDetalleProducto({id})               // Extraigo de la customHook useDetalleProducto los parametros necesarios

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