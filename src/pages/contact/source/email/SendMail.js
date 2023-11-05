import React from "react";
import ContactButton from "./../../assets/ContactButton/ContactBtn";
import useConstants from "./../../../../useConstants";

function SendEmailButton() {
  const {Email} = useConstants(); 

  const handleSendEmail = () => {
    window.location.href = `mailto:${Email}`;
  };

  return <ContactButton handle={handleSendEmail} text="Contact us" />;
}

export default SendEmailButton;
