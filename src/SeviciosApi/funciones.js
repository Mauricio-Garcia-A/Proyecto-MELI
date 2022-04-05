import axios from "axios";

//Petición y respuesta de una lista de productos, ingresando QUERY a buscar y CANTIDAD de productos a devolver
const productosLista = async(query, catElemntos) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${catElemntos}`)
    return peticion.data.results 
}

//Petición y respuesta de los DETALLES del producto seleccionado
const productoSeleccionado = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}`)
    return peticion.data
}

//Petición y respuesta de la DESCRIPCION del producto seleccionado
const productosDescripcion = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}/description`)
    return peticion.data.plain_text     
}
//Petición y respuesta de las CATEGORIAS del producto seleccionado
const categoriasSelecionadas = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/categories/${id}`)
    return peticion.data.path_from_root      
}

export {
    productosLista,
    productoSeleccionado,
    productosDescripcion,
    categoriasSelecionadas
}