import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import mission from "./../../../ImagesCollections/mission.gif";
import useConstants from "../../../useConstants";

const OurMission = () => {
  const {
    OurMissionTextPart1,
    OurMissionTextPart2,
    OurMissionTextPart3,
    OurMissionTextPart4,
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
          <Paper>
            <Typography
              variant="h3"
              style={{
                fontFamily: 'fantasy',
                color: "#20302d",
              }}
            >
              Our Mission
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            lg={4}
            md={8}
            sm={12}
            xs={12}
            style={{ border: "none", outline: "none" }}
          >
            <Paper
              style={{
                padding: "3em",
                backgroundColor: "#20302d",
                textAlign: "center",
              }}
            >
              <img alt="our mission" src={mission} width="100%" height="auto" />
            </Paper>
          </Grid>
          <Grid lg={8} md={12} sm={12} xs={12}>
            <Paper
              style={{
                textAlign: "center",
                padding: "3em",
                paddingBottom: "0em",
                margin: "2em 3em 0em 3em",
                backgroundColor: "#20302d",
                color: "wheat",
              }}
            >
              <Typography variant="subtitle1">
                {OurMissionTextPart1}
                <br />
                {OurMissionTextPart2}
                <br />
              </Typography>
            </Paper>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12}>
            <Paper
              style={{
                textAlign: "center",
                padding: "3em",
                paddingTop: "0em",
                margin: "0em 3em 2em 3em",
                backgroundColor: "#20302d",
                color: "wheat",
              }}
            >
              <Typography variant="subtitle1">
                {OurMissionTextPart3}
                <br />
                {OurMissionTextPart4}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OurMission;
