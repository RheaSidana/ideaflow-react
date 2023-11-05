import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayInvestorsAndPartners from "./DisplayInvestorsAndPartners";

const InvestorAndPartners = () => {
  return (
    <>
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
              variant="subtitle2"
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.3em",
                color: "wheat",
                fontWeight: "800",
              }}
            >
              We are Backed By
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "wheat",
              }}
            >
              World-Class Investors and Partners
            </Typography>
          </Paper>
        </Grid>
        <DisplayInvestorsAndPartners />
      </Paper>
      </>
  );
};

export default InvestorAndPartners;
