import { useState, useEffect } from 'react';
import {getProductosRecomendados } from "../SeviciosApi/getProductos";     

export function useProductosRecomendados() {
    const [productosRecomendados, setProductosRecomendados] = useState([])
    const [seccionVisible, setSeccionVisible] = useState(false)
    const [productosOferta, setProductosOferta] = useState([])
    const [loadingOfertas, setLoadigOfertas] = useState(false)
    const [loadingPR, setLoadigPR] = useState(false)
    const [productosVistos, setProductosVistos] = useState(null)
    
    
    useEffect(()=>{
        setLoadigOfertas(true)
        getProductosRecomendados({query:'ofertas', limit:4}).then(productos => {
            setProductosOferta(productos.items)
            setLoadigOfertas(false)
        })

        setLoadigPR(true)
        setProductosVistos(window.localStorage.getItem('productosBusqueda'))

        if (productosVistos === null){
            setSeccionVisible(false)
            setLoadigPR(false)
        } else {
            setLoadigPR(true)
            setSeccionVisible(true)
            getProductosRecomendados({query:productosVistos, limit:4}).then(productos => {
                setProductosRecomendados(productos.items)
                setLoadigPR(false)
            })            
        }

    },[productosVistos])

    return { productosOferta, productosRecomendados, seccionVisible, loadingOfertas, loadingPR}
    
}

