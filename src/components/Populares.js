import Tarjeta from "./Tarjeta";
import useFetchPeliculas from "../hooks/useFetchPeliculas"

const Populares = () =>{
    const peliculas = useFetchPeliculas("popular");
    return(
        <div>
            <h2>Soy componente Populares</h2>
            {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}
            <Tarjeta />
        </div>
    )
}

export default Populares;