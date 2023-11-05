import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayAdvice from "./DisplayAdvice";

const AdvisorsAdvice = () => {
    return (
        <Grid lg={11} md={11} sm={10} xs={10}>
      <Paper
        style={{
          textAlign: "center",
          height: "vh*.8",
          padding: "3em",
          margin: "2em 3em 2em 3em",
          backgroundColor: "#20302d",
          color: "wheat",
          borderRadius: 52,
        }}
      >
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{
              backgroundColor: "#477068",
              padding: "1em",
              borderRadius: 6,
            }}>
            <Typography
              variant="h3"
              style={{
                fontFamily: "cursive",
                color: "wheat",
                fontWeight: "600",
              }}
            >
              Words of Inspiration
            </Typography>
          </Paper>
        </Grid>
        <DisplayAdvice />
      </Paper>
    </Grid>
    )
}

export default AdvisorsAdvice;