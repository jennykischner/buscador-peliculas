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
  const { peliculas, totalPages } = useFetchPeliculas("now_playing");

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
              display: "flex !important",       
              flexDirection: "column !important",
              alignContent: "center !important",
              justifyContent: "flex-end !important",
              alignItems: "center !important"
            }}
          >
            <Box
              sx={{
                maxWidth: 950,
                display: "flex !important",
                flexDirection: "column !important",
                alignItems: "center !important ",
                m: 1,
                p: 3,
                textAlign: "center",
                opacity: [0.5, 0.5, 0.5],
                bgcolor:"#FFFFFF"
              }}
            >
              <Box sx={{ color: "text.primary"
             }}>
                <Typography
                  sx={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
                  }}
                  variant="h5"
                  component="div"
                >
                  {pelicula.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                    },
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
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
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;
