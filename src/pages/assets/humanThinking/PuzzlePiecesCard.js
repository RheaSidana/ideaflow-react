import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import { Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import LottieAnimation from "../imageAnimation/imageAnimation";

const PuzzlePiecesCard = ({ title, description}) => {
  const src = "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5ef9a10798e52eef3b2e06a0_data03.json"
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
            backgroundColor: "#403f3d",
            color: "wheat",
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
            <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "wheat",
              fontFamily: 'Copperplate, fantasy',
              fontSize: "18px",
              // fontWeight: 700,
              color: "black",
              margin: "2em",
            }}
            onClick={() => {
              const url = "https://docs.google.com/forms/d/1yhBzEkGB_nyDx9mVOQHsXvF3G1ovK4_SfAvh0TYAUds/viewform?edit_requested=true";
              window.open(url, "_blank");
            }}
          >
            Learn More
          </Button>
          </CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "120%",
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
        </Card>
      </Box>
    </Grid>
  );
};

export default PuzzlePiecesCard;
