import { useState, useEffect,useContext} from "react";
import {getProductos, getCategorias } from "../SeviciosApi/getProductos";           // Servicios
import ProductosContext from '../Contexto/ProductosContext'                         // Contexto

export function useProductos ({ keywords , limit }) {
    const [loading, setLoadig] = useState(false)
    const {products, setProducts} = useContext(ProductosContext)                    // Traigo products y setProduct del contexto
    const [categories, setCategorias] = useState([])
    const [searchError, setSearchError] = useState(false)
    const [page, setPage] = useState(0)
    const [loadingNextPage, setLoadingNextPage ]= useState(false)

    useEffect(function() {
        setLoadig(true)
        getProductos({query:keywords, limit}).then(productos => {
            setPage(0)                                                                                  // Cada vez que se busca un nuevo producto, trae la primer pagina 
            setProducts(productos.items)
            if (productos.items.length === 0) {
                const categorias = [{ id: "ERROR", name: "Categoria del producto no asignada"}]
                setCategorias(categorias) 
                setSearchError(true)
            } else {
                getCategorias({category_id:productos.categories}).then(categorias => {
                    setCategorias(categorias)
                })
                setSearchError(false)
            }
            setLoadig(false)  
        })
    
    },[keywords,setProducts, limit, searchError])

    useEffect(()=>{ 
        if (page !== 0) {  
            setLoadingNextPage(true)    
            getProductos({query:keywords, limit, page}).then(nextProductos => {
            setProducts(prevProductos => prevProductos.concat(nextProductos.items))
             setLoadingNextPage(false)
            })
        }
    }, [page])


    return {loading, products, categories, searchError, setPage, loadingNextPage}
}