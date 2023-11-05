import React from "react";
import BlurryImage from "./slider/Image";
import { Paper } from "@mui/material";

const ProgressBar = () => {
  return (
    <Paper
      style={{
        backgroundColor: "black",
        // background: <BlurryImage />,
        // padding: "5px",
        // height: "vh*.8",
        height: "auto",
        margin: "5em 2em 5em 5em",
      }}
    >
      <BlurryImage />
    </Paper>
  );
};

export default ProgressBar;
