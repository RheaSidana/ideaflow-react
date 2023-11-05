import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayAwardsAndRecognitions from "./DisplayAwardsAndRecognitions";

const AwardsAndRecognitions = () => {
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
              backgroundColor: "#477068",
              color: "black",
              padding: "1em"
            }}
          >
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.3em",
                fontWeight: "800",
              }}
            >
              We are Proud of Our
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
              }}
            >
            Awards And Recognitions
            </Typography>
          </Paper>
        </Grid>
        <DisplayAwardsAndRecognitions />
      </Paper>
    </Grid>
  );
};

export default AwardsAndRecognitions;
