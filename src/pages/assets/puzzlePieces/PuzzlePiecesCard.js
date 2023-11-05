import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import LottieAnimation from "../imageAnimation/imageAnimation";

const PuzzlePiecesCard = ({ title, description}) => {
  const src = "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f03ddfc2cd5766076391e19_dataheadnode02.json"
  return (
    <Grid lg={12} md={12} sm={10} xs={10}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
        padding={"0.2em"}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "grey",
            color: "black",
            height: "100%",
            width: "90%",
            borderRadius: 15,
            boxShadow: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1em",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "350%",
              // width: "3900px",
              height:"auto",
              // height:"500px",
              backgroundColor: "black",
              borderRadius: 62,
              boxShadow: 3,
              padding: "1.3em",
            }}
          >
            <div style={{ width: "100%", height:"100%" }}>
              <LottieAnimation src={src}/>
            </div>
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="h5"
              style={{ fontFamily: '"Lucida Handwriting", cursive', 
              fontWeight: 700,
             }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default PuzzlePiecesCard;
