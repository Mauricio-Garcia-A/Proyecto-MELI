import axios from "axios";


const productosLista = async(query, catElemntos) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${catElemntos}`)
    console.log(peticion.data.results) 
}
const productoSeleccionado = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}`)
    console.log(peticion.data)
}
const productosDescripcion = async(id) => {
    const peticion = await axios.get (`https://api.mercadolibre.com/items/${id}/description`)
    console.log(peticion.data.plain_text)
        
}

export {
    productosLista,
    productoSeleccionado,
    productosDescripcion
}