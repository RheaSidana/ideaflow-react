import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./FooterStyles";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./links/socialMedia/socialMediaLinks";
import AppIcon from "../assets/AppIcon";
import LatestUpdates from "./links/latestUpdates/LatestUpdates";
import RabbitHole from "./links/rabbitHole/RabbitHole";
import QuickLinks from "./links/quickLinks/QuickLinks";

const Footer = () => {
  const classes = styles();

  return (
    <Box className={classes.box}>
      <Container maxWidth="100%">
        <Box className={classes.containerBox}>
          <Box sx={{ mr: 1 }}>
            <Link to="/">
              <div>
                <AppIcon />
              </div>
            </Link>
          </Box>
          <Box>
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">Rabbit Hole</Typography>
              <RabbitHole />
            </Stack>
          </Box>
          <Box>
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">Quick Links</Typography>
              <QuickLinks />
            </Stack>
          </Box>
          <Box>
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">Latest Updates</Typography>
              <LatestUpdates />
            </Stack>
          </Box>
          <Box>
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">Social Media</Typography>
              <SocialMediaLinks />
            </Stack>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{ fontFamily: "Copperplate, Papyrus, fantasy" }}
          >
            {/* // style={{ fontFamily: '"Quite Magical"', }} */}
            Stay Updated through our mailing list:
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#454747",
              fontFamily: '"Georgia", serif',
              marginLeft: "1em",
            }}
            onClick={() => {
              const url = "https://docs.google.com/forms/d/1yhBzEkGB_nyDx9mVOQHsXvF3G1ovK4_SfAvh0TYAUds/viewform?edit_requested=true";
              window.open(url, "_blank");
            }}
          >
            Subscribe
          </Button>
        </Box>
        <Box className={classes.dividerContainer}>
          <Divider sx={{ my: 3, borderColor: "grey", borderWidth: 2 }} />
        </Box>
        <Box className={classes.copyright}>
          Copyright © 2020 Ideaflow, Inc. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
