import React from "react";
import { Twitter as TwitterIcon } from "@mui/icons-material";
import OpenTwitterPage from "./TwitterPage";
import ContactContainerContent from "../../assets/ContactContainer/Content";

const Twitter = () => {
  return (
    <ContactContainerContent
      icon={<TwitterIcon />}
      text="Through Twitter"
      btn={<OpenTwitterPage />}
    />
  );
};

export default Twitter;
