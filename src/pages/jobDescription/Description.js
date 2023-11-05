import React from "react";
import { Paper, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useDescription from "./useDescription";
import Box from "@mui/material/Box";

const Description = ({ opening, handleApplyNow }) => {
  const {
    aboutCompany,
    weOffer,
    additional,
    role,
    responsibility,
    requirement,
  } = useDescription({ opening });
  return (
    <Grid lg={8} md={10} sm={10} xs={10}>
      <Paper
        style={{
          height: "vh*.8",
          padding: "3em",
          margin: "2em 3em 2em 3em",
          backgroundColor: "#20302d",
          color: "wheat",
        }}
      >
        {aboutCompany()}
        <br />
        {role()}
        <br />
        {responsibility()}
        <br />
        {requirement()}
        <br />
        {additional()}
        <br />
        {weOffer()}
        <br />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            size="large"
            style={{
              color: "#20302d",
              backgroundColor: "wheat",
              fontFamily: '"Lucida Handwriting", cursive',
              width: "70%",
              height: "80px",
              padding: ".5em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.8em",
              fontWeight: 900,
              borderRadius: 66,
              textTransform: "none",
            }}
            onClick={handleApplyNow}
          >
            Apply Now
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Description;
