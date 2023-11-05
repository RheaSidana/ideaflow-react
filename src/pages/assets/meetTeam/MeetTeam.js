import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DisplayMeetTeam from "./DisplayMeetTeam";

const MeetTeam = () => {
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
          <Paper sx={{
              backgroundColor: "#477068",
              padding: "1em",
              borderRadius: 42,
            }}>
            <Typography
              variant="h3"
              style={{
                fontFamily: '"Lucida Handwriting", cursive',
                color: "wheat",
                fontWeight: "600",
              }}
            >
              Meet Our Team
            </Typography>
          </Paper>
        </Grid>
        <DisplayMeetTeam />
      </Paper>
    </Grid>
  );
};

export default MeetTeam;
