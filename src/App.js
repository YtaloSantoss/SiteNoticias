import React from "react";
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import Noticias from "./components/Noticias";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { DetailsPages } from "./components/detalis/DetailsPages";
import { DetailsCategory } from "./components/detaliscategory/DetailsCategory";
import { Footer } from "./components/footer";
import { DetailsEventos } from "./components/detaliscategoryEventos/DetalisEventos";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes >
          <Route path="/" element={<Noticias />} exact ></Route>
          <Route path="/sobre" element={<Sobre />} exact></Route>
          <Route path="/contato" element={<Contato />} exact></Route>
          <Route path='/details/:id' element={<DetailsPages />} exact></Route>
          <Route path='/detaliscategory/:id' element={<DetailsCategory />} exact></Route>
          <Route path='/detaliscategoryEventos/:id' element={<DetailsEventos />} exact></Route>
        </Routes >
        <Footer />
      </Router>
    </>
  );
}

export default App;
