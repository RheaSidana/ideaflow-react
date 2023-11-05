import React, {useState} from "react";
// import { Paper } from "@mui/material";
import ArrowButton from "./ArrowButtons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LeadershipCard from "./LeadershipCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import useLeadership from "./useLeadership";

const DisplayLeadership = () => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const { leaders } = useLeadership();
  const handleNext = () => {
    const nextIndex = (firstIndex + 1) % leaders.length;
    setFirstIndex(nextIndex);
    setSecondIndex((nextIndex+1) % leaders.length);
  };

  const handlePrev = () => {
    setSecondIndex(firstIndex);
    const prevIndex = firstIndex === 0 ? leaders.length-1 :
      (firstIndex - 1 + leaders.length) % leaders.length;
    setFirstIndex(prevIndex);
  };

  const displayLeadershipCards = [
    leaders.at(firstIndex), leaders.at(secondIndex),
  ]
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
        <ArrowButton
          icon={<ArrowBackIcon fontSize="large" />}
          handle={handlePrev}
        />
        {displayLeadershipCards.map((leader, index) => (
          <LeadershipCard
            key={index}
            name={leader.name}
            position={leader.designation}
            pastExperience={leader.past}
            avatarSrc={leader.imageUrl}
            altText={leader.name}
          />
        ))}
        <ArrowButton
          icon={<ArrowForwardIcon fontSize="large" />}
          handle={handleNext}
        />
      </Paper>
    </Grid>
  );
};

export default DisplayLeadership;
