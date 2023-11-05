import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = ({ toggleMenu }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={toggleMenu}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Menu;
