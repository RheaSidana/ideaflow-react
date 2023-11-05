import React from "react";
import ContactButton from "../../assets/ContactButton/ContactBtn";
import useConstants from "../../../../useConstants";

function OpenTwitterPage() {
  const {TwitterPageURL} = useConstants();

  const handleOpenTwitterPage = () => {
    window.open(TwitterPageURL, "_blank");
  };

  return <ContactButton handle={handleOpenTwitterPage} text="Our Tweets" />;
}

export default OpenTwitterPage;
