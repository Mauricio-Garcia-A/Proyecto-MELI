import { useState, useEffect} from "react";
import {getProductoSeleccionado, getDescripcionProducto, getCategorias } from "../SeviciosApi/getProductos";

export function useDetalleProducto ({id}) {
    const [loading, setLoadig] = useState(true)
    const [product, setProduct] = useState([])
    const [description, setDescription] = useState([])
    const [categories, setCategories] = useState([])
    const [price, setPrice ]= useState([])
    const [pictures, setPictures ]=useState([])
    //const [error, setError] = useState(false)

    useEffect(function() {
        setLoadig(true)
        getProductoSeleccionado({id}).then(producto => {
            setProduct(producto.item)

            const precio = []
            precio.push(producto.item.price.decimal.split(' ')[0])
            precio.push(producto.item.price.decimal.split(' ')[1].split(',')[0])
            precio.push(producto.item.price.decimal.split(' ')[1].split(',')[1])

            setPrice(precio)
            const imagenes= producto.item.pictures.map((imagen)=>{ return imagen.url })
            setPictures(imagenes)
            
            getCategorias({category_id:producto.categories}).then(categorias => {
                setCategories(categorias)  })
        }) 
        getDescripcionProducto({id}).then(descripcion => {
            setDescription(descripcion)  
        })

        setTimeout(()=>{
         setLoadig(false)   
        },500)
        }
    ,[id])

    
    return {loading, product, description, categories, price, pictures}
}