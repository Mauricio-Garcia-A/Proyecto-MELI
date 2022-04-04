import React from 'react';
import VistaPreliminarProducto from '../../Componentes/VistaPreliminarProducto/VistaPreliminarProducto.js';
import "./resultadosDelaBusqueda.scss";
import {Link} from 'react-router-dom';

export default function ResultadosDelaBusqueda() {
  const productosHardcodeados = [ 
    {id:"MLA898739985", title:"Apple AirPods Pro - Blanco", price:"40.790", address:{state_name: "Capital Federal"}, thumbnail:"http://http2.mlstatic.com/D_932957-MLA47782545553_102021-I.jpg", shipping:{free_shipping:true} },
    {id:"MLA1116129146", title:"Micrófono Shure Mv88 Condensador Cardioide Plata", price:"40.377", address:{state_name:"Capital Federal"}, thumbnail: "http://http2.mlstatic.com/D_749771-MLA41687090806_052020-I.jpg", shipping:{free_shipping:false} },
    {id:"MLA928422060", title:"Bafles Potenciados P/iPod Bose Sound Dock Ii - Black", price:"75.182", address:{state_name: "Buenos Aires"}, thumbnail:"http://http2.mlstatic.com/D_676532-MLA45077301248_032021-I.jpg", shipping:{free_shipping:false} },
    {id:"MLA1102223354", title:"Funda Rígida Colores Compatible Con Apple AirPods 1 2 Pro ", price:"1.599", address:{state_name:"Capital Federal" }, thumbnail:"http://http2.mlstatic.com/D_788560-MLA49090231795_022022-O.jpg", shipping:{free_shipping:true} }
  ]
  return (
    <div>
        <div className='contenedorEstandarProducto'>
            { productosHardcodeados.map(producto => (
                <div> 
                <Link key={producto.id}  to={`/items/${producto.id}`} className="estiloLink">  
                    <VistaPreliminarProducto Imagen={producto.thumbnail} Precio={producto.price} Titulo={producto.title} Ciudad={producto.address.state_name} EnvioGratis={producto.shipping.free_shipping}/>
                    <hr className='lineaDeSeparacion' />
                </Link>         
                </div>
            )) }
        </div>
        <br/>
    </div>
  )
}