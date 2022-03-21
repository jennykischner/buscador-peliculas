import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ItemListadoPeliculas from "./ItemListadoPeliculas";
import { colorPrincipal } from "../Auxiliares/Auxiliares";

const Listados = ({ titulo, url }) => {
  const [listaPeliculas, setListaPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-AR$page=1`
    )
      .then((res) => res.json())
      .then((data) => setListaPeliculas(data.results));
  }, []);

  return (
    <Box
      sx={{
        height: "450px",
        overflow: "scroll",
        borderBottom: `1px ${colorPrincipal} solid`,
      }}
    >
      <Box
        sx={{
          bgcolor: colorPrincipal,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            bgcolor: colorPrincipal,
            color: "white",
          }}
          variant="h3"
          gutterBottom
          component="div"
        >
          {titulo}
        </Typography>
      </Box>
      {listaPeliculas.map((pelicula) => (
        <ItemListadoPeliculas
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          linkIcono={`/${pelicula.id}`}
        />
      ))}
    </Box>
  );
};

export default Listados;
