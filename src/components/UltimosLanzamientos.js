import Tarjeta from "./Tarjeta";
import Paginado from "./Paginado";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


const UltimosLanzamientos = () => {
  const peliculas = useFetchPeliculas("now_playing");
  return (
    <Box
      sx={{
        marginTop: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          bgcolor: "#424242",
          color: "white",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Últimos Lanzamientos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
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
      <Paginado
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 100
        }}
      ></Paginado>
    </Box>
  );
};

export default UltimosLanzamientos;
