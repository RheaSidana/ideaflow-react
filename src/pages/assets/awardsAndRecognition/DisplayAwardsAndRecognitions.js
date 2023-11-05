import React from "react";
import AwardsAndRecognitionsCard from "./AwardsAndRecognitionsCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import useAwardsAndRecognitions from "./useAwardsAndRecognitions";

const DisplayAwardsAndRecognitions = () => {
  const { awards } = useAwardsAndRecognitions();

  return (
    <Paper
      sx={{
        // display: "flex",
        // justifyContent: "space-between",
        margin: "1.3em",
        // padding: "1.3em",
        backgroundColor: "inherit",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        padding="1.3em"
      >
        {awards.map((award, index) => (
          <AwardsAndRecognitionsCard
            key={index}
            name={award.name}
            avatarSrc={award.imageUrl}
            altText={award.name}
          />
        ))}
      </Grid>
    </Paper>
  );
};

export default DisplayAwardsAndRecognitions;
