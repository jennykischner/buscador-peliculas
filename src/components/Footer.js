import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        textAlign: "center",
        bgcolor: "#424242",
        height: 80,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
        }}
        variant="h6"
        component="div"
      >
        Hecho por Jenny Kischner
      </Typography>

      {/* Recordá que siempre que tengas un icono en un boton o link, sin texto, tenes que agregar aria-label para el lector de pantalla */}
      <IconButton
        target="_black"
        href="https://github.com/jennykischner/buscador-peliculas"
        sx={{
          color: "white",
          ":hover": {
            bgcolor: "#FFFFFF",
            color: "#000000",
            boxShadow: 2,
          },
        }}
      >
        <GitHubIcon fontSize="medium"></GitHubIcon>
      </IconButton>

      <IconButton
        target="_black"
        href="https://www.linkedin.com/in/jennifer-erica-kischner-45000b166/"
        sx={{
          color: "white",
          ":hover": {
            bgcolor: "#FFFFFF",
            color: "#000000",
            boxShadow: 2,
          },
        }}
      >
        <LinkedInIcon fontSize="medium"></LinkedInIcon>
      </IconButton>

      <IconButton
        target="_black"
        href="mailto:kischnerjennifer@gmail.com"
        sx={{
          color: "white",
          ":hover": {
            bgcolor: "#FFFFFF",
            color: "#000000",
            boxShadow: 2,
          },
        }}
      >
        <EmailIcon fontSize="medium"></EmailIcon>
      </IconButton>
    </Box>
  );
};

export default Footer;
