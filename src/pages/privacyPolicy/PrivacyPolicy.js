import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import OurPrivacyPolicy from "./ourPrivacyPolicy/OurPrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Paper
          style={{
            marginTop: "4em",
            height: "40%",
            padding: "2em",
            backgroundColor: "#20302d",
            display: "flex",
            justifyContent: "center",
            color: "wheat",
          }}
        >
          <Typography variant="h2" style={{ fontFamily: "cursive" }}>
            Privacy Policy
          </Typography>
        </Paper>
      </Grid>
      <OurPrivacyPolicy /> 
    </>
  );
};

export default PrivacyPolicy;
