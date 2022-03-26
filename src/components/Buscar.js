import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Buscar = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    usuarioBusqueda: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=2502e04450297fe1820caf2543ff47df`
    )
      .then((res) => res.json())
      .then((data) => setSearchParams(data.results));
  }, [searchParams]);

  return (
    <Box sx={{ marginTop: 10 }}>
      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        label="Buscar Peliculas"
        variant="standard"
      ></TextField>
      <Button
        margin="normal"
        variant="outline"
        endIcon={<SearchIcon></SearchIcon>}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default Buscar;
