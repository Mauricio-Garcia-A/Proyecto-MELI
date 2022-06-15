import { API_URL, author } from "./Configuraciones"

export function getCategorias({category_id}) {
    
    const API_URL_BUSCAR_CATEGORIAS=`${API_URL}/categories/${category_id}`

    return fetch(API_URL_BUSCAR_CATEGORIAS)                                                         // Se hace la llamada a la API
        .then(response=>response.json())                                                            // Se convierte la respuesta a JSON
        .then(data => { 
            const {path_from_root}=data
            return path_from_root 
        })
        .catch(error => {console.log('Error Servicio Lista de Categorias')}) 
}

export function getProductos({query, limit}) {
    const API_URL_BUSCAR_PRODUCTOS=`${API_URL}/sites/MLA/search?q=${query}&limit=${limit}`

    return fetch(API_URL_BUSCAR_PRODUCTOS)                                                                       // Se hace la llamada a la API
        .then(response=>response.json())                                                                        // Se convierte la respuesta a JSON
        .then(data => { 
            const {results} = data                                                                         // De los datos de la respuesta extraigo solo los 'results' (array con los productos)
            if (results.length !== 0) { 
                const items = results.map(item => {
                    const {id, title, currency_id, category_id, thumbnail, shipping} = item 
                    const price = {
                        currency: currency_id,
                        amount: item.price,
                        decimal: Intl.NumberFormat('es-AR', {style:'currency', currency:`${currency_id}`}).format(item.price)
                    }
                    const picture = thumbnail
                    const{free_shipping}=shipping
                    const condition = item.condition === 'new' ? 'Nuevo' : 'Usado'
                    const address=item.address.state_name
                    return {
                        id, 
                        title, 
                        price, 
                        picture,
                        condition,
                        free_shipping,
                        address,
                        category_id
                    }                                                  
                })
                const categories= items[0].category_id
    
                const ENDPOINT_PRODUCTOS = {author,items,categories}
                return ENDPOINT_PRODUCTOS               
            } else { 
                const items=[]
                const categories="MLA389314"
                const ENDPOINT_ERROR = {author,items,categories}
                return ENDPOINT_ERROR
            }
        })
        .catch(error => {
            const items=[]
            const categories="MLA389314"
            const ENDPOINT_ERROR = {author,items,categories}
            return ENDPOINT_ERROR
        })
        
}


/* ENPOINT 1    
{
 “author”: {
            “name”: String
            “lastname”: String
            },
 categories: [id String, String, ...],
 items: [
        {
        "id": String,
        "title": String,
        "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
                },
        “picture”: String,
        "condition": String,
        "free_shipping": Boolean
        },

-----------------------------------------------------------------
{
 “author”: {
            “name”: String
            “lastname”: String
            },
 “item”: {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number,
            },
 “picture”: String,
 "condition": String,
 "free_shipping": Boolean,
 "sold_quantity", Number
 "description": String
 }
}

        */


export function getProductoSeleccionado({id}) {
    const API_URL_PRODUCTO_SELECCIONADO=`${API_URL}/items/${id}`

    return fetch(API_URL_PRODUCTO_SELECCIONADO)                                                                       // Se hace la llamada a la API
        .then(response=>response.json())                                                                        // Se convierte la respuesta a JSON
        .then(data => { 
            const { id, title, currency_id, category_id, pictures, available_quantity, sold_quantity, shipping}= data
            const price = {
                currency: currency_id,
                amount: data.price,
                decimal: Intl.NumberFormat('es-AR', {style:'currency', currency:`${currency_id}`}).format(data.price)
            }
            const condition = data.condition === 'new' ? 'Nuevo' : 'Usado'
            const{free_shipping}=shipping
            const item =  {id, title, price, condition, pictures, free_shipping, sold_quantity, available_quantity }
            const categories= category_id

            const ENDPOINT_PRODUCTOS_SELECCIONADO = {author, item, categories}
            return ENDPOINT_PRODUCTOS_SELECCIONADO
        })
        .catch(error => {console.log('Error Servicio al buscar Producto seleccionado')}) 
}

export function getDescripcionProducto({id}) {
    const API_URL_DESCRIPCION_PRODUCTO=`${API_URL}/items/${id}/description`

    return fetch(API_URL_DESCRIPCION_PRODUCTO)                                                                       // Se hace la llamada a la API
        .then(response=>response.json())                                                                        // Se convierte la respuesta a JSON
        .then(data => { 
            const {plain_text}=data
            return plain_text
        })
        .catch(error => {console.log('Error Servicio al buscar la Descripcion del producto')})    
}