import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RootRoutes from "../router/RootRoutes";
import ParticleBackground from "../assets/background/Particles";

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        <RootRoutes />
        <ParticleBackground />
      </Grid>
    </Box>
  );
};

export default Main;
