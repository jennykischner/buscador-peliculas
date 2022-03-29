import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const DetallePelicula = () => {
  const params = useParams();

  const [peliculaDetalle, setPeliculaDetalle] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculaDetalle(data);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${peliculaDetalle.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
        display: "flex",
      }}
    >
      <Card
        key={peliculaDetalle.id}
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          px: 16,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "300px", height: "400px" }}
              image={`https://image.tmdb.org/t/p/original/${peliculaDetalle.poster_path}`}
            ></CardMedia>
          </Box>
          <CardContent sx={{ ml: 6 }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="h4"
                color="white"
                sx={{ lineHeight: "initial" }}
              >
                {peliculaDetalle.title}
                {""}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#424242",
                  fontWeight: 400,
                  pl: 2,
                  fontSize: 16,
                  fontFamily: "Montserrat, Caladea",
                }}
              >
                {peliculaDetalle.release_date &&
                  peliculaDetalle.release_date.slice(0, 4)}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{
                pt: 3,
                textAlign: "justify",
                fontWeight: 400,
                fontSize: 20,
                fontFamily: "Montserrat",
              }}
            >
              {peliculaDetalle.overview}
            </Typography>
            {peliculaDetalle.genres &&
              peliculaDetalle.genres.map((genre) => (
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{
                    pt: 3,
                    textAlign: "justify",
                    fontWeight: 300,
                    fontSize: 16,
                    fontFamily: "Zilla Slab",
                  }}
                >
                  {genre.name}
                </Typography>
              ))}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default DetallePelicula;
