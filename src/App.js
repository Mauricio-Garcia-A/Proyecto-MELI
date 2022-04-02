import React from "react";
import BarraDeBusqueda from "./Componentes/BarraDeBusqueda/BarraDeBusqueda.js";
import Home from "./Vistas/Home/Home.js";
import ResultadosDelaBusqueda from "./Vistas/ResultadosDeLaBusqueda/ResultadosDelaBusqueda.js";
import DetalleDelProducto from "./Vistas/DetalleDelProduto/DetalleDelProduto.js";
import "./App.scss";

function App() {
  return (
    <div className="contenedorPrincipal">
      <BarraDeBusqueda />
      <div className="contenedorApp">
        <Home />
        <br />
        <ResultadosDelaBusqueda />
        <br />
        <DetalleDelProducto /> 
        <br />      
      </div>
    </div>
  );
}

export default App;
