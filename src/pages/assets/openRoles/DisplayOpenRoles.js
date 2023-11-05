import React, { useState } from "react";
import OpenRolesCard from "./OpenRolesCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import useOpenRoles from "./useOpenRoles";

const DisplayOpenRoles = () => {
  const { openings, aboutCompany, weOffer, Additionals, Role, applyNow } =
    useOpenRoles();

  const displayNoOfOpenings = 4;
  const [displayedOpenings, setDisplayedOpenings] = useState(
    openings.slice(0, displayNoOfOpenings)
  );

  const isLoadMoreButtonDisabled = displayedOpenings.length >= openings.length;

  const handleClickLoadMore = () => {
    setDisplayedOpenings([
      ...displayedOpenings,
      ...openings.slice(
        displayedOpenings.length,
        displayedOpenings.length + displayNoOfOpenings
      ),
    ]);
  };

  return (
    <div
      style={{
        padding: "1.3em",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        {displayedOpenings.map((opening, index) => (
          <OpenRolesCard
            key={index}
            opening={opening}
            aboutCompany={aboutCompany}
            weOffer={weOffer}
            additionals={Additionals}
            role={Role}
            applyNow={applyNow}
          />
        ))}
        {isLoadMoreButtonDisabled ? null : (
          <Grid lg={10} md={10} sm={12} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                size="large"
                style={{
                  color: "wheat",
                  backgroundColor: "black",
                  fontFamily: '"Georgia", serif',
                  fontWeight: 700,
                  width: "70%",
                  height: "80px",
                  padding: ".5em",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.3em",
                  borderRadius: 66,
                  textTransform: "none",
                }}
                onClick={handleClickLoadMore}
                disabled={isLoadMoreButtonDisabled}
              >
                {openings.length - displayedOpenings.length + "+ "}
                more
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default DisplayOpenRoles;
