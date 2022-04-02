import React, {Fragment} from 'react';
import "./cajaDeBusqueda.scss";
import IconoBusqueda from "../../Imagenes/ic_Search.png";

export default class CajaDeBusqueda extends React.Component {
    constructor(props){
        super();
        this.state = { 
             
         }
    }
    render() {
      return (
        <Fragment>
            <form className='contenedorFormularioBusqueda'>
                <input className='inputBusqueda' type="text" name="name" placeholder="Nunca dejes de buscar"/>
                <button className='buttomBusqueda'><img src={IconoBusqueda} alt="B"/></button>
                
            </form>
        </Fragment>
      );
    }
};
  
  


