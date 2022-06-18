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
        window.scrollTo(0, 0)
      }, [])

    const {id} = useParams();
    const {product, description, categories, price, pictures, loading} = useDetalleProducto({id})


    return (
        <> {loading 
                ?<PlaceholderDetalleDeProducto 
                    Titulo={product.title} 
                    Precio={price}   
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
                    <br />
                </>
            }
            
        </>
    )
}