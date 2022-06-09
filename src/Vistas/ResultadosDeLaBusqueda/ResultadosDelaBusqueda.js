import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js'
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs.js'
import "./resultadosDelaBusqueda.scss"
import { useProductos } from '../../Hooks/useProductos.js'
import PlaceholderListaProductos from '../../Componentes/ItemsLoading/PlaceholderListaProductos/PlaceholderListaProductos.js'
import ErrorBusquedaProducto from '../../Componentes/ErrorBusquedaProducto/ErrorBusquedaProducto.js'


/* -------------------------  Vista RESULTADOSDELABUSQUEDDA  -----------------------------
    La vista Resultado Muestra la lista de los resultados surgidos de la búsqueda
*/

export default function ResultadosDelaBusqueda() {
  const [params] = useSearchParams()                                
  let keywords = params.get("search")                                             // Recupero la palabra buscada de la url 
  const {products, categories, loading, searchError}= useProductos({ keywords, limit:4})       // LLamada al sevicio (API) por medio de un customHook 

  return (
    
    <>
    { loading                                                                     // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
      ?   <PlaceholderListaProductos />
      :   <>
            <BreadCrumbs Categorias={categories} />
              <div className='contenedorEstandarProducto'>
                  { searchError
                      ? <ErrorBusquedaProducto palabraBuscada={keywords}/>
                      : <>
                          { products.map(producto => (
                            <Link key={producto.id}  to={`/items/${producto.id}`} className="estiloLink">  
                                  <VistaPreliminarProducto  Imagen={producto.picture} 
                                                            Precio={producto.price.amount} 
                                                            Titulo={producto.title} 
                                                            Ciudad={producto.address} 
                                                            EnvioGratis={producto.free_shipping}
                                  />
                                  <hr className='lineaDeSeparacion' />
                              </Link>
                          )) }
                          <div className='contenedorBotonVerMasProductos'>
                              <button className='botonEstandar'> Ver mas Productos </button>
                          </div>
                        </>
                  }
              </div>              
          </>
    }
    </>
  )
}