import React from "react";
import ContactButton from "./../../assets/ContactButton/ContactBtn";
import useConstants from "./../../../../useConstants";

const OpenFacebookPage = () => {
  const {FacebookPageURL} = useConstants();

  const handleOpenFacebookPage = () => {
    window.open(FacebookPageURL, "_blank");
  };

  return <ContactButton handle={handleOpenFacebookPage} text="Our FB Page" />;
}

export default OpenFacebookPage;
