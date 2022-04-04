import React from "react";
import {Routes, Route} from 'react-router-dom'
import BarraDeBusqueda from "./Componentes/BarraDeBusqueda/BarraDeBusqueda.js";
import Home from "./Vistas/Home/Home.js";
import ResultadosDelaBusqueda from "./Vistas/ResultadosDeLaBusqueda/ResultadosDelaBusqueda.js";
import DetalleDelProducto from "./Vistas/DetalleDelProduto/DetalleDelProduto.js";
import Erro from "./Vistas/Error/Error.js";
import "./App.scss";

function App() {
  return (
    <div className="contenedorPrincipal">
      <BarraDeBusqueda />
      <br />
      <div className="contenedorApp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/items"} element={ <ResultadosDelaBusqueda /> } />
          <Route path="/items/:id" element={ <DetalleDelProducto /> } />
          <Route path="*" element={ <Erro /> } />
        </Routes>     
      </div>
    </div>
  );
}

export default App;