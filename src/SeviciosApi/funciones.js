import axios from "axios";


const productosLista = async(query, catElemntos) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${catElemntos}`)
    return peticion.data.results 
}
const productoSeleccionado = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}`)
    return peticion.data
}
const productosDescripcion = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}/description`)
    return peticion.data.plain_text     
}

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