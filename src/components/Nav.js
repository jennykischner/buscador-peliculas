import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () =>{
    return (
      <div>
        
        <Box sx={{ flexGrow: 1 }}>
          <AppBar 
          position="fixed"
          sx={{ bgcolor: "red"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Buscador Películas
              </Typography>
              <Button color="inherit">
                <Link to="/"> Home </Link>
              </Button>
                 
              <Button>
                <Link to="/ultimos-lanzamientos">Ultimos Lanzamientos</Link>
              </Button> 

              <Button>
                <Link to="/populares">Populares </Link>
              </Button>

              <Button>
              <Link to="/buscar">Buscar</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        
        <ul>
            
            <li></li>
            <li> </li>
        </ul>

      </div>
  
    )
  }
  
  export default Nav;