import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import WhoAreWe from "./../assets/whoAreWe/WhoAreWe";
import OurMission from "../assets/mission/OurMission";
import OurPolicies from "./../assets/policies/OurPolicies";
import Leadership from "../assets/leadership/Leadership";
import Advisors from "../assets/advisors/Advisors";
import InvestorAndPartners from "../assets/investorsAndPartners/InvestorsAndPartners";

const AboutUs = () => {
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
            About Us
          </Typography>
        </Paper>
      </Grid>
      <WhoAreWe />
      <OurMission />
      <OurPolicies />
      <Leadership />
      <Advisors />
      <Grid lg={8} md={10} sm={10} xs={10}>
      <InvestorAndPartners />
      </Grid>
    </>
  );
};

export default AboutUs;
