import React from "react";
import { Facebook } from "@mui/icons-material";
import OpenFacebookPage from "./FacebookPage";
import ContactContainerContent from "./../../assets/ContactContainer/Content";

const FaceBook = () => {
  return (
    <ContactContainerContent
      icon={<Facebook />}
      text="Through Facebook"
      btn={<OpenFacebookPage />}
    />
  );
};

export default FaceBook;
