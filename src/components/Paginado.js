import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Paginado = () => {
  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default Paginado;
