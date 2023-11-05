import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import OurValues from "../assets/values/OurValues";
import AwardsAndRecognitions from "../assets/awardsAndRecognition/AwardsAndRecognitions";
import OurPerks from "../assets/perks/OurPerks";
import MeetTeam from "../assets/meetTeam/MeetTeam";
import OpenRoles from "../assets/openRoles/OpenRoles";

const Careers = () => {
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
            Careers
          </Typography>
        </Paper>
      </Grid>
      {/*
      5. Open Roles
       */}
      <OurValues />
      <AwardsAndRecognitions />
      <OurPerks />
      <MeetTeam />
      <OpenRoles />
    </>
  );
};

export default Careers;
