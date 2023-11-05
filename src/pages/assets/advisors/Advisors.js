import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayAdvisors from "./DisplayAdvisors";

const Advisors = () => {
  return (
    <Grid lg={8} md={10} sm={10} xs={10}>
      <Paper
        style={{
          textAlign: "center",
          height: "vh*.8",
          padding: "3em",
          margin: "2em 3em 2em 3em",
          backgroundColor: "#20302d",
          color: "wheat",
        }}
      >
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{
              backgroundColor: "white",
              padding: "1em",
            }}>
            <Typography
              variant="h3"
              style={{
                fontFamily: "cursive",
                color: "#20302d",
                fontWeight: "600",
              }}
            >
              Our Advisors
            </Typography>
          </Paper>
        </Grid>
        <DisplayAdvisors />
      </Paper>
    </Grid>
  );
};

export default Advisors;
