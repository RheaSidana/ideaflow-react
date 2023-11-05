import React from "react";
import MeetTeamCard from "./MeetTeamCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import useMeetTeam from "./useMeetTeam";

const DisplayMeetTeam = () => {
  const { teamMembers } = useMeetTeam();
  return (
      <Paper
        sx={{
          margin: "1em",
          backgroundColor: "inherit",
        }}
      >
        <Grid container spacing={2}
        alignItems="center"
        justifyContent="center"
        >
        {teamMembers.map((teamMember, index) => (
          <MeetTeamCard
            key={index}
            name={teamMember.name}
            position={teamMember.designation}
            pastExperience={teamMember.past}
            avatarSrc={teamMember.imageUrl}
            altText={teamMember.name}
          />
          ))}
          </Grid>
      </Paper>
  );
};

export default DisplayMeetTeam;
