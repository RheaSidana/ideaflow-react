import React from "react";
// import { Paper } from "@mui/material";
import AdvisorsAdviceCard from "./AdvisorsAdviceCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import useAdvices from "./useAdvices";

const DisplayAdvice = () => {
  const { advisors: leaders } = useAdvices();

  const displayLeadershipCards = leaders
  return (
    <Grid container spacing={3}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: "1.3em",
          padding: "1em",
          backgroundColor: "inherit",
        }}
      >
        {displayLeadershipCards.map((leader, index) => (
          <AdvisorsAdviceCard
            key={index}
            name={leader.name}
            position={leader.designation}
            pastExperience={leader.message}
            avatarSrc={leader.imageUrl}
            altText={leader.name}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default DisplayAdvice;
