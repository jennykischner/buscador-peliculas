import { Box } from "@mui/material";
import Carrusel from "./Carrusel";
import Listados from "./Listados";

const Main = () => {
  return (
    <Box sx={{marginTop: 4}} >
      <h3>Este es el main</h3>
      <Carrusel />
      <Box sx={{ display: "flex", justifyContent: "space-around", padding: 5 }}>
      <Listados titulo="Peliculas Populares" url="popular" />
      <Listados titulo="Peliculas Mejor Puntadas" url="now_playing" />
    </Box>
    </Box>
  );
};

export default Main;
