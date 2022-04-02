import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const MenuDesplegable =() =>{
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        return (
          <Box>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon sx={{color:"white"}}/>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}> <Link to="/ultimos-lanzamientos"></Link>Últimos Lanzamientos</MenuItem>
              <MenuItem onClick={handleClose}> <Link to="/populares"></Link> Populares</MenuItem>
              <MenuItem onClick={handleClose}> <Link to="/buscar"></Link>Buscar</MenuItem>
            </Menu>
          </Box>
        );
      }


export default MenuDesplegable