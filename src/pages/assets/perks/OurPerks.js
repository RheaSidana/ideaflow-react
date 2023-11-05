import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PerkCard from "./PerkCard";
import usePerks from "./usePerks";

const OurPerks = () => {
  const {perks: values} = usePerks();

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
              backgroundColor: "white",
              padding: "1em",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "fantasy",
                color: "#20302d",
              }}
            >
              Perks of Working at Ideaflow
            </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {values.map((perk, index)=> (
          <PerkCard
          key={index}
            title={"Perk"}
            description={"<Description>"}
            imgSrc={perk.url}
            imgAlt={perk.alt}
          />
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OurPerks;
