import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useSEO from '../../Hooks/useSEO'    
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js'
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs.js'
import "./resultadosDelaBusqueda.scss"
import { useProductos } from '../../Hooks/useProductos.js'
import PlaceholderListaProductos from '../../Componentes/ItemsLoading/PlaceholderListaProductos/PlaceholderListaProductos.js'
import ErrorBusquedaProducto from '../../Componentes/ErrorBusquedaProducto/ErrorBusquedaProducto.js'
import Slider from '../../Componentes/ItemsLoading/Slider/Spinner.js'

/* -------------------------  Vista RESULTADOSDELABUSQUEDDA  -----------------------------
    La vista Resultado Muestra la lista de los resultados surgidos de la búsqueda
*/
export default function ResultadosDelaBusqueda() {
  const [params] = useSearchParams()                                
  let keywords = params.get("search")                                                                                     // Recupero la palabra buscada de la url 
  const {products, categories, loading, searchError, setPage, loadingNextPage}= useProductos({ keywords, limit:4})       // LLamada al sevicio (API) por medio de un customHook 

  if (searchError) {                                                                                                     // Si la busqueda de productos tiene resultados, guardo las palabas buscadas en el LocalStorage
    window.localStorage.removeItem('productosBusqueda')
  } else {
    window.localStorage.setItem('productosBusqueda',keywords)
  }

  const handlerNextPage =()=> {
    setPage(prevPage => prevPage + 1)
  }

  const tituloSeoRDLB = loading ? 'Cargando...' : `${products.length} resultados de "${keywords}"`
  const descripcionSeoRDLB = `Descripcion de los ${products.length} resultados de la busqueda de "${keywords}"`
  useSEO({title: tituloSeoRDLB, description: descripcionSeoRDLB})
  
  return (
    <div className="contenedorApp">
    { loading                                                                                                           // Si esta cargado muestra Placehoder y cuando termina de cargar muestra el Listado De Productos
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
                                                            Precio={producto.price.decimal} 
                                                            Titulo={producto.title} 
                                                            Ciudad={producto.address} 
                                                            EnvioGratis={producto.free_shipping}
                                  />
                                  <hr className='lineaDeSeparacion' />
                              </Link>
                          )) }
                          {loadingNextPage ? <Slider />:null}
                          <div className='contenedorBotonVerMasProductos'>
                              <button className='botonEstandar' onClick={handlerNextPage}> Ver mas Productos </button>
                          </div>
                        </>
                  }
              </div>              
          </>
    }
    </div>
  )
}