import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ItemListadoPeliculas from "./ItemListadoPeliculas";


const Listados = ({ titulo, url, Link }) => {
  const [listaPeliculas, setListaPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-AR$page=1`
    )
      .then((res) => res.json())
      .then((data) => setListaPeliculas(data.results));
  }, [url]);

  return (
    <Box sx={{m: 2}}>
      <Box
        sx={{
          bgcolor: "#424242",
          height: 80,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,

        }}
      >
        <Typography
          sx={{
            bgcolor: "#424242",
            color: "white",
            fontSize: {
              xs: "18px",
              sm: "20px",
            },
          }}
          variant="h5"
        
          component="div"
        >
          {titulo}
        </Typography>
      </Box>

      <Box
        sx={{
          overflowY: "scroll",
          height: "50vh",
        }}
      >
        {listaPeliculas.map((pelicula) => (
          <ItemListadoPeliculas
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            linkIcono={`/${pelicula.id}`}
            id={pelicula.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Listados;
