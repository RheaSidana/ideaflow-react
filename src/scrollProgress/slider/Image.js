import React from "react";
import useConstants from "./../../useConstants";

const BlurryImage = () => {
  const { ImageSliderSrc } = useConstants();

  return (
    <div>
      <img src={ImageSliderSrc} alt="not displayed" 
        width="100%" height="auto" 
      />
    </div>
  );
};

export default BlurryImage;
