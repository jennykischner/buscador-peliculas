import Tarjeta from "./Tarjeta";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { Box } from "@mui/material";

const UltimosLanzamientos = () => {
  const peliculas = useFetchPeliculas("now_playing");
  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {peliculas.map((pelicula) => (
        <Tarjeta
          key={pelicula.id}
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
        />
      ))}
    </Box>
  );
};

export default UltimosLanzamientos;
