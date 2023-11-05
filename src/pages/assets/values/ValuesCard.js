import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const ValuesCard = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <Grid lg={4} md={6} sm={9} xs={9} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        sx={{ minWidth: 275, padding: "1em" }}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "black",
            color: "wheat",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "76%",
              backgroundColor: "grey",
              padding: "1em",
              margin: "1em",
              borderRadius: 36,
            }}
          >
            <div style={{ width: "50%" }}>
              <CardMedia
                component="img"
                height="auto"
                image={imgSrc}
                alt={imgAlt}
              />
            </div>
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ValuesCard;
