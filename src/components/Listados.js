import { useEffect, useState } from "react";
import ItemListadoPeliculas from "./ItemListadoPeliculas";
import {
  List,
  ListItem, 
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider
} from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Listados = ({ titulo, url }) => {
  const [listaPeliculas, setListaPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=2502e04450297fe1820caf2543ff47df&language=es-AR$page=1`
    )
      .then((res) => res.json())
      .then((data) => setListaPeliculas(data.results));
  }, []);

  return (
    <div className="lista-peliculas">
      <h2>{titulo}</h2>
      
      {listaPeliculas.map((pelicula) => (
          <List>
          <ListItem button>
             <ListItemAvatar>
                <Avatar
                  alt={`Imagen de la Película`}
                  src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
                />
              </ListItemAvatar>
            <ListItemText>
             {pelicula.title}
            </ListItemText>
            <ListItemIcon >
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </ListItemIcon>
            
          </ListItem>
          <Divider></Divider> 
          </List>

      ))}
      
      
      {/* {listaPeliculas.map((pelicula) => (
        <ItemListadoPeliculas
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          link={`/${pelicula.id}`}
        /> 
      ))} */}
    </div>
  );
};

export default Listados;
