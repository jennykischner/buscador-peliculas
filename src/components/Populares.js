import Tarjeta from "./Tarjeta";
import Paginado from "./Paginado";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Populares = () => {
  const [page, setPage] = useState(1);
  const { peliculas, totalPages } = useFetchPeliculas("popular", page);

  const handleClickFirstPage = () => {
    setPage(1);
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const handleClickUltimaPagina = (totalPages) => {
    setPage(totalPages);
  };

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
          color: "#424242",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
          ml: 4,
          textAlign: "center",
          ":hover": {
            bgcolor: "#bdbdbd",
            color: "#FFFFFF",
            boxShadow: 2,
            border: 1
          },
        }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Populares
      </Typography>

      <Box
        sx={{
          display: "flex",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          textAlign: "center",
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
          width: 100,
        }}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        page={page}
        handleClickFirstPage={handleClickFirstPage}
        handleClickUltimaPagina={() =>
          handleClickUltimaPagina(totalPages > 500 ? 500 : totalPages)
        }
        totalPages={totalPages}
      ></Paginado>
    </Box>
  );
};

export default Populares;
