import React from "react";
import { AppBar, Toolbar, Button, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery, Drawer, List, ListItemText } from "@mui/material";
import styles from "./NavbarStyles";
import { useState } from "react";
import Menu from "./MenuIcon";
import AppIcon from "../assets/AppIcon";

const Navbar = () => {
  const classes = styles();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "#282929",
          }}
        >
          <div className={classes.toolbar}>
            {isSmallScreen && <Menu toggleMenu={toggleMenu} />}
            <div>
              <AppIcon />
            </div>
            <div>
              {!isSmallScreen && (
                <div className={classes.toolbar}>
                  <Link to="/">
                    <Button style={{ color: "white" }}>Home</Button>
                  </Link>
                  <Link to="/about">
                    <Button style={{ color: "white" }}>About</Button>
                  </Link>
                  <Link to="/careers">
                    <Button style={{ color: "white" }}>Careers</Button>
                  </Link>
                  <Link to="/contact">
                    <Button style={{ color: "white" }}>Contact</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={isMenuOpen} onClose={toggleMenu}>
        <List>
          <ListItemButton component={Link} to="/" onClick={toggleMenu}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/about" onClick={toggleMenu}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton component={Link} to="/careers" onClick={toggleMenu}>
            <ListItemText primary="Careers" />
          </ListItemButton>
          <ListItemButton component={Link} to="/contact" onClick={toggleMenu}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
