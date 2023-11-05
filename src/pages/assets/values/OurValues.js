import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ValuesCard from "./ValuesCard";
import useValues from "./useValues";

const OurValues = () => {
  const {values} = useValues();

  return (
    <Grid lg={8} md={10} sm={10} xs={10}>
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
              backgroundColor: "black",
              padding: "1em",
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "wheat",
              }}
            >
              Our Values
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3}>
          <ValuesCard
            title={"Value 1"}
            description={"<Description>"}
            imgSrc={values[0].url}
            imgAlt={values[0].alt}
          />
          <ValuesCard
            title={"Value 2"}
            description={"<Description>"}
            imgSrc={values[1].url}
            imgAlt={values[1].url}
          />
          <ValuesCard
            title={"Value 3"}
            description={"<Description>"}
            imgSrc={values[2].url}
            imgAlt={values[2].alt}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OurValues;
