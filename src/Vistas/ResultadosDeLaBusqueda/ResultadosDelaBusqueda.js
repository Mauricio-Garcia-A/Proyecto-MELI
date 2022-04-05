import React, { useEffect, useState } from 'react';
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js';
import "./resultadosDelaBusqueda.scss";
import { Link, useSearchParams } from 'react-router-dom';
import { productosLista, categoriasSelecionadas} from '../../SeviciosApi/funciones.js'
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs.js';

export default function ResultadosDelaBusqueda() {
  const [ categorias, setCategorias ] = useState([])
  const [ productos, setProductos ] = useState([])
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function buscar () {
      let searchParam = searchParams.get("search")
      let products = await productosLista(searchParam, 4);
      setProductos(products)
      let categories = await categoriasSelecionadas(products[0].category_id);
      setCategorias(categories)
    }
    buscar()
  }, [searchParams])

  return (
    <div>
        <BreadCrumbs Categorias={categorias} />
        <div className='contenedorEstandarProducto'>
            { productos.map(producto => (
                <div> 
                <Link key={producto.id}  to={`/items/${producto.id}`} className="estiloLink">  
                    <VistaPreliminarProducto Imagen={producto.thumbnail} Precio={producto.price} Titulo={producto.title} Ciudad={producto.address.state_name} EnvioGratis={producto.shipping.free_shipping}/>
                    <hr className='lineaDeSeparacion' />
                </Link>         
                </div>
            )) }
        </div>
        <br/>
    </div>
  )
}