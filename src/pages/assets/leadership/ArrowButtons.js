import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ArrowButton = ({ icon, handle }) => {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
    <Grid lg={2} md={1}>
      <Button style={{fontSize: "50em", color: "wheat"}} onClick={handle}>{icon}</Button>
    </Grid>
    </div>
  );
};

export default ArrowButton;
