import React from "react";
import useConstants from "../useConstants";
import styles from "../navbar/NavbarStyles";

const AppIcon = () => {
  const { AppImageLogoSrc } = useConstants();
  const classes = styles();
  return (
    <img 
        src={AppImageLogoSrc} 
        alt="App Logo" 
        className={classes.appImage} 
    />
  );
};

export default AppIcon;
