import * as React from 'react';
import {
  List,
  ListItem, 
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider, 
  Box,
  Link, 
  IconButton
} from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ItemListadoPeliculas = ({ titulo, imagen, linkIcono }) => {
  return (

    <Box>
       <List sx={{bgcolor:'background.paper', width: "350px"}}>
          <ListItem alingItems="flex-start">
             <ListItemAvatar>
                <Avatar
                  alt={`Imagen de la Película`}
                  src={`https://image.tmdb.org/t/p/w300/${imagen}`}
                />
              </ListItemAvatar>
            <ListItemText>
            {titulo}
            </ListItemText>
            <Link to={linkIcono}>

            </Link>
            <IconButton> 
            
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
               
            </IconButton>
            
          </ListItem>
          <Divider variant="inset" component="li"></Divider> 
          </List>



    </Box>
    
  );
};

export default ItemListadoPeliculas;
