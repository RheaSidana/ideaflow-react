import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PuzzlePiecesCard from "./PuzzlePiecesCard";
import usePuzzlePieces from "./usePuzzlePieces";

const PuzzlePieces = () => {
  const { content: values } = usePuzzlePieces();

  return (
    <Grid lg={11} md={11} sm={11} xs={11}>
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
              backgroundColor: "white",
              // backgroundColor: "#85827d",
              padding: "1em",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "#20302d",
                // color: "#91eda9",
              }}
            >
              Connecting people with matching puzzle pieces
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {values.map((perk, index) => (
            <PuzzlePiecesCard
              key={index}
              title={
                "There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?"
              }
              description={"- Sir Tim Berners-Lee, Creator of the Web"}
            />
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PuzzlePieces;
