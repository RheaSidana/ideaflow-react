import React, {useState} from "react";
// import { Paper } from "@mui/material";
import ArrowButton from "./ArrowButtons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AdvisorsCard from "./AdvisorsCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import useAdvisors from "./useAdvisors";

const DisplayAdvisors = () => {
  const [firstIndex, setFirstIndex] = useState(0);
  const { advisors } = useAdvisors();
  const handleNext = () => {
    const nextIndex = (firstIndex + 1) % advisors.length;
    setFirstIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = firstIndex === 0 ? advisors.length-1 :
      (firstIndex - 1 + advisors.length) % advisors.length;
    setFirstIndex(prevIndex);
  };

  const displayLeadershipCards = [
    advisors.at(firstIndex)
  ]
  return (
    <Grid container spacing={2}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "1.3em",
          padding: "1.3em",
          backgroundColor: "inherit",
          width: "100%",
        }}
      >
        <ArrowButton
          icon={<ArrowBackIcon fontSize="large" />}
          handle={handlePrev}
        />
        {displayLeadershipCards.map((leader, index) => (
          <AdvisorsCard
            key={index}
            name={leader.name}
            position={leader.designation}
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

export default DisplayAdvisors;
