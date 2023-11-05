import React from "react";
// import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const LinkButton = ({ url, icon, text, fontFam }) => {
  const handleOpenPage = () => {
    window.open(url, "_blank");
  };

  const handleOpenEmail = () => {
    window.location.href = `mailto:${url}`;
  };

  return (
    <Button
      sx={{ color: "white", textTransform: "none" }}
      onClick={text === "Email" ? handleOpenEmail : handleOpenPage}
    >
      {icon}
      <Typography
        variant="body1"
        style={{
          fontFamily: fontFam ? fontFam : '"Lucida Console", Monospace',
          padding: "0 5px",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default LinkButton;
