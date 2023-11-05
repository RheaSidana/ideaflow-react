import React from "react";
import Button from "@mui/material/Button";

const ContactButton = ({ handle, text }) => {
  return (
    <Button
      variant="contained"
      onClick={handle}
      style={{ backgroundColor: "grey", color: "wheat"}}
    >
      {text}
    </Button>
  );
};

export default ContactButton;
