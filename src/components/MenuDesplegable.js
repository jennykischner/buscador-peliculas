import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const MenuDesplegable = () => {
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* el link deberia rodear a MenuItem, en lugar de MenuItem rodeando a link. Asi como esta ahora, 
        el click solo funciona si es sobre el texto, en lugar de todo el ancho del boton del menú */}
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Home{" "}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/ultimos-lanzamientos"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Últimos Lanzamientos{" "}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/populares"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Populares{" "}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buscar" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Buscar{" "}
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuDesplegable;
