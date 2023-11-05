import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

const AwardsAndRecognitionsCard = ({
  name,
  avatarSrc,
  altText,
}) => {
  return (
    <Grid lg={4} md={4} sm={6} xs={6}>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{padding: "1.5em", width: "70%",
        height: "auto",
        backgroundColor: "black",
       }}
      >
            <img alt={altText}
              src={avatarSrc} style={{
                padding: "0.5em",
                height: "100%",
                width: "100%",
              }}
              />
      </Box>
    </Grid>
  );
};

export default AwardsAndRecognitionsCard;
