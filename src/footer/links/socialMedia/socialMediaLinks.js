import React from "react";
import LinkButton from "./../../../assets/LinkButton";
import useFooter from "../../useFooter";

const SocialMediaLinks = () => {
  const { socialMedias } = useFooter();
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
    }}>
      {socialMedias.map((socialMedia, index) => (
        <LinkButton
          key={index}
          url={socialMedia.to}
          icon={socialMedia.icon}
          text={socialMedia.text}
          fontFam={'"Lucida Handwriting", cursive'}
        />
      ))}
    </div>
  );
};

export default SocialMediaLinks;
