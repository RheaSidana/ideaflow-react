import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import usePrivacyPolicy from "../hook/usePrivacyPolicy";

const OurPrivacyPolicy = () => {
  const Policies = () => {
    return policies.map((policy, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1em",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          {policy.Topic}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {policy.Policy.map((item, ind) => (
            <>
            <Typography variant="body1" key={ind} style={{
              textAlign: "justify",
              padding: item.charAt(0) === '-' ? "0em 1.5em": "1em 0em",
            }}>
              {item.charAt(0) === '-' ? "* " + item.substring(1) : item}
            </Typography>
            </>
          ))}
        </div>
        <br />
      </div>
    ));
  };
  const { Introduction, policies } = usePrivacyPolicy();
  return (
    <Grid lg={8} md={10} sm={10} xs={10}>
      <Paper
        style={{
          height: "vh*.8",
          padding: "3em",
          margin: "2em 3em 2em 3em",
          backgroundColor: "#20302d",
          color: "wheat",
        }}
      >
        <div style={{
            textAlign: "center",
          }}>
        <Typography variant="h6">{Introduction}</Typography>
        </div>
        <br />
        {Policies()}
      </Paper>
    </Grid>
  );
};

export default OurPrivacyPolicy;
