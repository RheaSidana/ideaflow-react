import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "./../assets/image/Image";
import Email from "./source/email/Email";
import LinkedIn from "./source/linkedIn/LinkedIn";
import ContactContainer from "./assets/ContactContainer/Container";
import FaceBook from "./source/facebook/Facebook";
import Twitter from "./source/twitter/Twitter";

const Contact = () => {
  return (
    <>
      <Grid
        lg={4}
        md={7}
        sm={9}
        xs={9}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper
          style={{
            marginTop: "5em",
            marginLeft: "2em",
            padding: "2em",
            backgroundColor: "#20302d",
          }}
        >
          <Image />
        </Paper>
      </Grid>
      <Grid lg={8} md={10} sm={12} xs={12}>
        <Paper
          style={{
            textAlign: "center",
            height: "vh*.8",
            padding: "2em",
            paddingRight: "0em",
            paddingBottom: "5em",
            margin: "5em 3em 0em 3em",
            backgroundColor: "#20302d",
            color: "wheat",
          }}
        >
          <h1>CONTACT DETAILS</h1>
          <ContactContainer element={<Email />} />
          <ContactContainer element={<LinkedIn />} />
          <ContactContainer element={<FaceBook />} />
          <ContactContainer element={<Twitter />} />
        </Paper>
      </Grid>
    </>
  );
};

export default Contact;
