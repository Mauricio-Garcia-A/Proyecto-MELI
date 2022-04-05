import React, { useEffect, useState } from 'react';
//Paquetes Dependencias
import { Link, useSearchParams } from 'react-router-dom';

//Componentes Utilizados
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs.js';

//Dependencia de Estilos
import "./resultadosDelaBusqueda.scss";

//Importación de Servicios API
import { productosLista, categoriasSelecionadas} from '../../SeviciosApi/funciones.js';
  

/* Vista RESULTADOSDELABUSQUEDDA
    La vista Resultado Muestra la lista de los resultados surgidos de la búsqueda
*/
export default function ResultadosDelaBusqueda() {
  //Declaracion y inicalizacion de estados
  const [ categorias, setCategorias ] = useState([])
  const [ productos, setProductos ] = useState([])
  const [searchParams] = useSearchParams();

  /* Llamadas al servicio API: BUSCAR - Hace las peticiones necesarias a la API para obtener 
     una lista de productos relacionados al valor ingresado en la CajaDeBusqueda, y además establecer 
     las categorías de producto para ser utilizadas en el BreadCrums    
  */
  useEffect(() => {
    async function buscar () {
      let searchParam = searchParams.get("search")
      let products = await productosLista(searchParam, 4);   //Petición Y Respuesta del Listado de 4 productos 
      setProductos(products)
      let categories = await categoriasSelecionadas(products[0].category_id);    //Partición y Respuesta de las Categorías del primer producto
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
                    <VistaPreliminarProducto  Imagen={producto.thumbnail} 
                                              Precio={producto.price} 
                                              Titulo={producto.title} 
                                              Ciudad={producto.address.state_name} 
                                              EnvioGratis={producto.shipping.free_shipping}
                    />
                    <hr className='lineaDeSeparacion' />
                </Link>         
                </div>
            )) }
        </div>
        <br/>
    </div>
  )
}