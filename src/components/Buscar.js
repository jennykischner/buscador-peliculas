import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tarjeta from "./Tarjeta";

const Buscar = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  useEffect(() => {
    // aca podrias usar las variables que tenes en auxiliares
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=en-EN&query=${searchParams.get(
        "query"
        // estaria bueno agregar un paginado aca
      )}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  // como esto es un click, y el textField no esta rodeado de un <form>, el buscador solo funciona
  // haciendo click en "buscar" y no cuando aprieto enter en el input
  // agrega una etiqueta form y pone esto mismo en un handle submit para mejorar el comportamiento
  const handleClick = () => {
    setSearchParams({
      query: valorDelInput,
    });
  };

  return (
    <Box sx={{ marginTop: 15 }}>
      {/* Este componente se ve feo en mobile, yo le daria flex-direction column en menos de 600px de pantalla */}
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: 400 }}
          id="standard-basic"
          label="Buscar Peliculas"
          variant="standard"
          onChange={handleChange}
          value={valorDelInput}
        ></TextField>

        <Button
          margin="normal"
          variant="outline"
          endIcon={<SearchIcon></SearchIcon>}
          onClick={handleClick}
        >
          Buscar
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {peliculas &&
          peliculas.map((pelicula) => {
            return (
              <Tarjeta
                titulo={pelicula.title}
                imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
                linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default Buscar;
