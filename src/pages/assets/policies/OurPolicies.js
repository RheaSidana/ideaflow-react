import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PolicyCard from "./PolicyCard";
import useConstants from "../../../useConstants";

const OurPolicies = () => {
  const {
    PromoteWellBeingPolicyImg,
    PromoteWellBeingPolicyImgAlt,
    HealthCarePolicyImg,
    HealthCarePolicyImgAlt,
    CharityPolicyImg,
    CharityPolicyImgAlt,
  } = useConstants();
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
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "wheat",
              }}
            >
              Our Policies
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.3em",
                color: "wheat",
                fontWeight: "600",
              }}
            >
              People Centric
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3}>
          <PolicyCard
            title={"Promote Well Being"}
            description={"$500 per month"}
            imgSrc={PromoteWellBeingPolicyImg}
            imgAlt={PromoteWellBeingPolicyImgAlt}
          />
          <PolicyCard
            title={"Healthcare Coverage"}
            description={"Comprehensive (including acupuncture!)"}
            imgSrc={HealthCarePolicyImg}
            imgAlt={HealthCarePolicyImgAlt}
          />
          <PolicyCard
            title={"Charity Policy"}
            description={"Donation matching to your favorite charities"}
            imgSrc={CharityPolicyImg}
            imgAlt={CharityPolicyImgAlt}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OurPolicies;
