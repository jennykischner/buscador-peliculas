import Tarjeta from "./Tarjeta";
import useFetchPeliculas from "../hooks/useFetchPeliculas";

const UltimosLanzamientos = () => {
  const peliculas = useFetchPeliculas("upcoming");
  return (
    <div>
      <h2>Soy ultimos Lanzamientos</h2>
      {peliculas.map((pelicula) => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}
      <Tarjeta />
    </div>
  );
};

export default UltimosLanzamientos;
