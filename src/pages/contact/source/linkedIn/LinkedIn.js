import React from "react";
import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import OpenLinkedInProfile from "./LinkedInProfile";
import ContactContainerContent from "../../assets/ContactContainer/Content";

const LinkedIn = () => {
  return (
    <ContactContainerContent
      icon={<LinkedInIcon />}
      text="Through LinkedIn"
      btn={<OpenLinkedInProfile />}
    />
  );
};

export default LinkedIn;
