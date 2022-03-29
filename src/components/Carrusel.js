import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { Link } from "react-router-dom";

const Carrusel = () => {
  const peliculas = useFetchPeliculas("now_playing");

  return (
    <Box>
      <Slider
        dots={true}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={3500}
      >
        {peliculas.map((pelicula) => (
          <Box
            key={pelicula.id}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${pelicula.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "60vh",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <Box
              sx={{
                width: "50%",
                heigth: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 50,
                py: 40,
                textAlign: "center",
                opacity: [0.5, 0.5, 0.5],
                bgcolor: "transparent",
              }}
            >
              <Card sx={{ color: "text.primary" }}>
                <Typography variant="h5" component="div">
                  {pelicula.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 16,
                    fontFamily: "Montserrat, Caladea",
                    fontWeight: "500",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  {pelicula.overview}
                </Typography>

                <Link to={`/detalle-pelicula/${pelicula.id}`}>
                  <Button
                    sx={{
                      bgcolor: "#424242",
                      ":hover": { bgcolor: "#424242" },
                      borderColor: "#424242",
                      display: "inline-block",
                    }}
                    size="small"
                    variant="contained"
                  >
                    Ver mas...
                  </Button>
                </Link>
              </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;
