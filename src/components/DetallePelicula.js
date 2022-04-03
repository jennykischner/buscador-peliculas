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
        height: "120vh",
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
              sx={{
                width: "300px",
                height: "400px",
                ":hover": {
                  bgcolor: "#424242",
                  color: "#FFFFFF",
                  boxShadow: 10,
                  borderRadius:4
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline",
                },
              }}
              image={`https://image.tmdb.org/t/p/original/${peliculaDetalle.poster_path}`}
            ></CardMedia>
          </Box>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                color="white"
                sx={{
                  lineHeight: "initial",
                  fontSize: {
                    xs: "20px",
                    sm: "40px",
                    md: "40px",
                  },
                }}
              >
                {peliculaDetalle.title}
                {""}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  pl: 2,
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    md: "30px",
                  },

                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
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
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                  md: "20px",
                },

                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
              }}
            >
              {peliculaDetalle.overview}
            </Typography>

            <Typography
              variant="subtitle1"
              color="white"
              sx={{
                pt: 3,
                textAlign: "justify",
                fontWeight: 400,
                fontSize: {
                  xs: "20px",
                  sm: "15px",
                  md: "25px",
                },

                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
              }}
            >
              Géneros:
            </Typography>
            <Box sx={{ 
              display: "flex", 
              flexWrap: "wrap",
              }}>
              {peliculaDetalle.genres &&
                peliculaDetalle.genres.map((genre) => (
                  <Typography
                    variant="subtitle1"
                    color="white"
                    sx={{
                      pt: 3,
                      textAlign: "justify",
                      fontWeight: 300,
                      px: "8px",
                      py: "4px",
                      textAling: "justify",
                      mr: "10px",
                      mt: "10px",
                      borderRadius: 4,
                      border: "1px solid",
                      ":hover": {
                        fontWeight: 500,
                        bgcolor: "#FFFFFF",
                        color: "#000000",
                        boxShadow: 3,
                        border: 1
                      },  
                      fontSize: {
                        xs: "15px",
                        sm: "20px",
                        md: "20px",
                      },
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
                    }}
                  >
                    {genre.name}
                  </Typography>
                ))}
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default DetallePelicula;
