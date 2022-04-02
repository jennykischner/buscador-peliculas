import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const ItemListadoPeliculas = ({ titulo, imagen, id }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "80%",
          sm: "80%",
          md: "100%",
        },
        m: 1,
      }}
    >
      <List
        sx={{
          bgcolor: "background.paper",
          width: {
            xs: "320px",
            sm: "400px",
            md: "450px",
          }
        }}
      >
        <ListItem alingItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={`Imagen de la Película`}
              src={`https://image.tmdb.org/t/p/w300/${imagen}`}
            />
          </ListItemAvatar>
          <ListItemText>{titulo}</ListItemText>

          <Link to={`/detalle-pelicula/${id}`}>
            <IconButton>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </IconButton>
          </Link>
        </ListItem>
        <Divider variant="inset" component="li"></Divider>
      </List>
    </Box>
  );
};

export default ItemListadoPeliculas;
