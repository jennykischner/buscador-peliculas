import Tarjeta from "./Tarjeta";
import useFetchPeliculas from "../hook/useFetchPeliculas";

const UltimosLanzamientos = () => {
  const peliculas = useFetchPeliculas("now_playing");
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
