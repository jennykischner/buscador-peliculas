import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

const Paginado = ({
  handleClickNext,
  handleClickPrev,
  page,
  totalPages,
  handleClickFirstPage,
  handleClickUltimaPagina,
}) => {
  return (
    <Box
      sx={{
        py: 10,
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "center",
      }}
    >
      <IconButton
        aria-label="volver a primer pagina"
        onClick={handleClickFirstPage}
        disabled={page === 1}
      >
        <SkipPreviousIcon />
      </IconButton>
      <IconButton
        aria-label="pagina anterior"
        onClick={handleClickPrev}
        disabled={page === 1}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <Typography variant="h5" gutterBottom component="div" sx={{ m: 2 }}> Página: {page}</Typography>

      <IconButton
        aria-label="pagina siguiente"
        onClick={handleClickNext}
        disabled={totalPages > 500 ? page === 500 : page === totalPages}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton
        aria-label="ir a ultima pagina"
        onClick={() => handleClickUltimaPagina(totalPages> 500 ? 500 : totalPages)}
     
      >
        <SkipNextIcon />
      </IconButton>
    </Box>
  );
};

export default Paginado;
