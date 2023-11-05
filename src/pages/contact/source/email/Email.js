import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import SendEmailButton from "./SendMail";
import ContactContainerContent from "./../../assets/ContactContainer/Content";

const Email = () => {
  return (
    <ContactContainerContent
      icon={<MailIcon />}
      text="Through Email"
      btn={<SendEmailButton />}
    />
  );
};

export default Email;
