import React from 'react';
import ProductoDetallado from '../../Componentes/ProductoDetallado/ProductoDetallado';
import "./detalleDelProduto.scss";
//import {useParams} from 'react-router-dom'

export default function DetalleDelProducto() {
    //const {idProducto}=useParams();
    const productosHardcodeados = [ 
        {id:"MLA898739985", title:"Apple AirPods Pro - Blanco", price:"40.790", address:{state_name: "Capital Federal"}, thumbnail:"http://http2.mlstatic.com/D_932957-MLA47782545553_102021-I.jpg", value_name:"Nuevo", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.", shipping:{free_shipping:true}},
        {id:"MLA1116129146", title:"Micrófono Shure Mv88 Condensador Cardioide Plata", price:"40.377", address:{state_name:"Capital Federal"}, thumbnail: "http://http2.mlstatic.com/D_749771-MLA41687090806_052020-I.jpg", value_name:"Nuevo", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.", shipping:{free_shipping:false}},
        {id:"MLA928422060", title:"Bafles Potenciados P/iPod Bose Sound Dock Ii - Black", price:"75.182", address:{state_name: "Buenos Aires"}, thumbnail:"http://http2.mlstatic.com/D_676532-MLA45077301248_032021-I.jpg", value_name:"Nuevo", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.", shipping:{free_shipping:false}},
        {id:"MLA1102223354", title:"Funda Rígida Colores Compatible Con Apple AirPods 1 2 Pro ", price:"1.599", address:{state_name:"Capital Federal" }, thumbnail:"http://http2.mlstatic.com/D_788560-MLA49090231795_022022-O.jpg", value_name:"Nuevo", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non., ", shipping:{free_shipping:true}}
      ];
    // const productoHardcodeado=productosHardcodeados.filter(producto => producto.id === JSON.stringify(idProducto);
   
    return (
        <>
            <div  className='contenedorEstandarProducto'>
                <ProductoDetallado Imagen={productosHardcodeados[0].thumbnail} Estado={productosHardcodeados[0].value_name} CantidadVendidos="230" Titulo={productosHardcodeados[0].title} Precio={productosHardcodeados[0].price} Descripcion={productosHardcodeados[0].description}/>
            </div>
            <br />
        </>
    )
}