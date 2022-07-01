import { useState, useEffect } from 'react';
import {getProductosRecomendados } from "../SeviciosApi/getProductos";     

export function useProductosRecomendados() {
    const [productosRecomendados, setProductosRecomendados] = useState([])
    const [seccionVisible, setSeccionVisible] = useState(false)
    const [productosOferta, setProductosOferta] = useState([])
    const [loadingOfertas, setLoadigOfertas] = useState(false)
    const [loadingPR, setLoadigPR] = useState(false)
    const productosVistos = window.localStorage.getItem('productosBusqueda')
    
    useEffect(()=>{
        setLoadigPR(true)
        getProductosRecomendados({query:'ofertas', limit:4}).then(productos => {
            setProductosOferta(productos.items)
            setLoadigPR(false)
        })
        if (productosVistos !== null){
            setLoadigOfertas(true)
            getProductosRecomendados({query:productosVistos, limit:4}).then(productos => {
                setProductosRecomendados(productos.items)
                setSeccionVisible(true)
                setLoadigOfertas(false)
            })            
        }

    },[productosVistos])

    return { productosOferta, productosRecomendados, seccionVisible, loadingOfertas, loadingPR}
    
}

