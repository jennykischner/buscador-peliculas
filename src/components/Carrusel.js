import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
        autoplaySpeed={2500}
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
                maxWidth: 950,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 40,
                py: 40,
                textAlign: "center",
                opacity: [0.9, 0.9, 0.8],  
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {pelicula.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {pelicula.overview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/detalle-pelicula/${pelicula.id}`}>
                    <Button 
                    sx={{bgcolor:"#424242"}}
                    size="small" variant="contained">
                      Ver mas...
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;
