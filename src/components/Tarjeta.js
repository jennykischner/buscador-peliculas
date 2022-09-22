import * as React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Tarjeta = ({ titulo, imagen, linkTarjeta }) => {
  return (
    <Card
      sx={{
        width: 250,
        heigth: 370,
        m: 2,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        // si la imagen no esta disponible en la api, esto se va a ver roto
        // deberias tener una imagen backup local
        image={imagen}
        // usá el titulo como parte del alt para diferenciar cada imagen entre si
        alt="Afiche Pelicula"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            width: 200,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            textAling: "center",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            fontWeight: 600,
          }}
        >
          {titulo}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={linkTarjeta}>
          <IconButton style={{ color: "#424242" }}>
            <RemoveRedEyeIcon></RemoveRedEyeIcon>
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Tarjeta;
