import "./Home.css";
import Carrusel from "./Carrusel";
import Listados from "./Listados";

const Main = () => {
  return (
    <div className="main">
      <h3>Este es el main</h3>
      <Carrusel />
      <Listados titulo="Peliculas Populares" url="popular" />
      <Listados titulo="Peliculas Mejor Puntadas" url="top_rated" />
    </div>
  );
};

export default Main;
