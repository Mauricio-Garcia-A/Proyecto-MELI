import { useState, useEffect} from "react";
import {getProductos, getCategorias } from "../SeviciosApi/getProductos";

export function useProductos ({ keywords , limit}) {
    const [loading, setLoadig] = useState(false)
    const [products, setProductos] = useState([])
    const [categories, setCategorias] = useState([])
    const [searchError, setSearchError] = useState(false)

    useEffect(function() {
        setLoadig(true)
        getProductos({query:keywords, limit}).then(productos => {
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

    return {loading, products, categories, searchError}
}