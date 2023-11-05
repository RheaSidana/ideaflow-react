import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import ProgressBar from "./../../scrollProgress/ProgressBar";
import AdvisorsAdvice from "../assets/advisorsAdvice/AdvisorsAdvice";
import InvestorAndPartners from "../assets/investorsAndPartners/InvestorsAndPartners";
import PuzzlePieces from "../assets/puzzlePieces/PuzzlePieces";
import HumanThinking from "../assets/humanThinking/PuzzlePieces";
import Company from "./../assets/company/OurValues";

const Home = () => {
  return (
    <>
      {/* 2 columns on large screen and 1 on smaller or medium screen  */}
      <Grid
        lg={3}
        md={3}
        sm={7}
        xs={12}
        sx={{
          position: "fixed",
          top: "0", // Adjust the top position as needed
          left: "0", // Adjust the right position as needed
        }}
      >
        {/* <div
          style={{
            position: "fixed",
            top: "0", // Adjust the top position as needed
            right: "0", // Adjust the right position as needed
          }}
        > */}
        <ProgressBar />
        {/* </div> */}
      </Grid>
      <Grid lg={11} md={11} sm={12} xs={12}>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            height: "vh*.8",
            padding: "2em 0em",
            paddingLeft: "9em",
            margin: "5em 0em 5em 4em",
            backgroundColor: "inherit",
            // backgroundColor: "#20302d",
            color: "wheat",
          }}
        >
          <Company />
          <Grid lg={11} md={11} sm={10} xs={10}>
            <InvestorAndPartners />
          </Grid>
          <PuzzlePieces />
          <HumanThinking />
          <AdvisorsAdvice />
        </Paper>
      </Grid>
    </>
  );
};

export default Home;
