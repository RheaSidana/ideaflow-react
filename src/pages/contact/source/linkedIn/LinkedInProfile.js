import React from "react";
import ContactButton from "../../assets/ContactButton/ContactBtn";
import useConstants from "../../../../useConstants";

function OpenLinkedInProfile() {
  const {LinkedinProfileURL} = useConstants();

  const handleOpenLinkedIn = () => {
    window.open(LinkedinProfileURL, "_blank");
  };

  return <ContactButton handle={handleOpenLinkedIn} text="Our Profile" />;
}

export default OpenLinkedInProfile;
