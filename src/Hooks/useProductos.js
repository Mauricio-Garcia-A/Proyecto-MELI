import { useState, useEffect} from "react";
import {getProductos, getCategorias } from "../SeviciosApi/getProductos";


export function useProductos ({ keywords , limit }) {
    const [loading, setLoadig] = useState(false)
    const [products, setProductos] = useState([])
    const [categories, setCategorias] = useState([])
    const [searchError, setSearchError] = useState(false)
    const [page, setPage] = useState(0)
    const [loadingNextPage, setLoadingNextPage ]= useState(false)

    useEffect(function() {
        setLoadig(true)
        getProductos({query:keywords, limit}).then(productos => {
            setPage(0)
            setProductos(productos.items)
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
    
    },[keywords,setProductos, limit, searchError])

    useEffect(()=>{ 
        if (page !== 0) {  
            setLoadingNextPage(true)    
            getProductos({query:keywords, limit, page}).then(nextProductos => {
            setProductos(prevProductos => prevProductos.concat(nextProductos.items))
            console.log(page)
             setLoadingNextPage(false)
            })
        }
       console.log(products)
    }, [page])


    return {loading, products, categories, searchError, setPage, loadingNextPage}
}