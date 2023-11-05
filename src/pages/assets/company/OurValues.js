import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ValuesCard from "./ValuesCard";
import useValues from "./useValues";

const OurValues = () => {
  const { values } = useValues();

  return (
    <Grid lg={11} md={11} sm={11} xs={11}>
      <Paper
        style={{
          textAlign: "center",
          height: "vh*.8",
          padding: "3em",
          margin: "2em 3em 2em 3em",
          backgroundColor: "#20302d",
          color: "wheat",
        }}
      >
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Paper
            sx={{
              backgroundColor: "#477068",
              padding: "1em",
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "black",
              }}
            >
              The Intelligence Amplification Company
            </Typography>
          </Paper>
        </Grid>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ValuesCard
            title={"Value 1"}
            description={"<Description>"}
            imgSrc={values[0].url}
            imgAlt={values[0].alt}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OurValues;
