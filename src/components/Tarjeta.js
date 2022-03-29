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
        display: "flex",
        flexDirection: "column;",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={imagen}
        alt="Afiche Pelicula"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h8"
          component="div"
          sx={{
            width: 350,
            whiteSpace: "nowrap",
            textOverFlow: "ellipsis",
            overflow: "hidden",
            textAling: "center",
            fontFamily: "Zilla Slab"
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
