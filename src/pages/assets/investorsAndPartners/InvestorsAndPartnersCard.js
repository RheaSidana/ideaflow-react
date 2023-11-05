import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

const InvestorsAndPartnersCard = ({ name, avatarSrc, altText }) => {
  return (
    <Grid lg={3} md={4} sm={6} xs={6}>
      <div
        style={{
          width: "85%",
          height: "170px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          borderRadius: 28,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: "1.5em" }}
        >
          <img
            alt={altText}
            src={avatarSrc}
            style={{
              padding: "0.5em",
              maxHeight: "100%",
              maxWidth: "100%",
              // objectFit: "contain",
            }}
          />
        </Box>
      </div>
    </Grid>
  );
};

export default InvestorsAndPartnersCard;
