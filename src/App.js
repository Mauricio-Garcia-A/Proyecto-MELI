import React from "react";
import {Routes, Route} from 'react-router-dom';
import {ProductosContextProvider} from './Contexto/ProductosContext.js'
import BarraDeBusqueda from "./Componentes/BarraDeBusqueda/BarraDeBusqueda.js";                     //Componentes Utilizados
import Home from "./Vistas/Home/Home.js";
import ResultadosDelaBusqueda from "./Vistas/ResultadosDeLaBusqueda/ResultadosDelaBusqueda.js";
import DetalleDelProducto from "./Vistas/DetalleDelProduto/DetalleDelProduto.js";
import Erro from "./Vistas/Error/Error.js";
import PieDePagina from "./Componentes/PieDePagina/PieDePagina.js";
import "./App.scss";                                                                              //Dependecia de Estilos

/* APP - COMPONENTE PRINCIPAL 
    En este componente establece el routeo de la aplicación, para poder navegar entre las diferentes vistas.
    El componente APP cuenta con un encabezado fijo donde se encuentra el componente BarraDeBusqueda, 
    y un contenedor donde se irán mostrando las frecuentes VISTAS según corresponda, mediante el Routeo asignado.
*/
function App() {
  return (
    <div className="contenedorPrincipal">
      <BarraDeBusqueda />
      <> 
        <ProductosContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Proyecto-MeLi" element={<Home />} />
            <Route path={"/items"} element={ <ResultadosDelaBusqueda /> } />
            <Route path="/items/:id" element={ <DetalleDelProducto /> } />
            <Route path="*" element={ <Erro /> } />
          </Routes>
        </ProductosContextProvider>   
      </>
      <footer className="contenedorPieDePagina">
        <PieDePagina />
      </footer>
      
    </div>
  );
}

export default App;