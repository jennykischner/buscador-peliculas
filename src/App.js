import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Buscar from "./components/Buscar";
import DetallePelicula from "./components/DetallePelicula";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/detalle-pelicula/:idPelicula" element={<DetallePelicula />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
