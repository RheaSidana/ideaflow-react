import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayOpenRoles from "./DisplayOpenRoles";

const OpenRoles = () => {
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
        <Paper
            sx={{
              backgroundColor: "black",
              padding: "1em"
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "white",
                // color: "wheat",
              }}
            >
              Open Roles
            </Typography>
          </Paper>
        </Grid>
        <DisplayOpenRoles />
      </Paper>
    </Grid>
  );
};

export default OpenRoles;
