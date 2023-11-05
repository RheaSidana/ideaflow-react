import React from "react";
import { Paper } from "@mui/material";

const ContactContainer = ({ element }) => {
  return (
    <Paper
      style={{
        textAlign: "center",
        padding: "1em",
        margin: "1em 3em 0em 3em",
        backgroundColor: "black",
        color: "wheat",
      }}
    >
      {element}
    </Paper>
  );
};

export default ContactContainer;
