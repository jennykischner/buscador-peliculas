import { Box } from "@mui/material";
import Carrusel from "./Carrusel";
import Listados from "./Listados";

const Main = () => {
  return (
    <Box  >
      
      <Carrusel />

      <Box sx={{ display: "flex", justifyContent: "space-around", padding: 5 }}>
      <Listados titulo="Peliculas Populares" url="popular" />
      <Listados titulo="Peliculas Mejor Puntadas" url="now_playing" />
    </Box>
    </Box>
  );
};

export default Main;
