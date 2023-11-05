import React, { useState } from "react";
import InvestorsAndPartnersCard from "./InvestorsAndPartnersCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
// import { Button, Paper } from "@mui/material";
import useInvestorsAndPartners from "./useInvestorsAndPartners";

const DisplayInvestorsAndPartners = () => {
  const { investorsAndPartners: getList } = useInvestorsAndPartners();
  const investorAndPartnerList = getList();
  const [displayedInvestorsAndPartners, setDisplayedInvestorsAndPartners] =
    useState(investorAndPartnerList.slice(0, 3));
  const isLoadMoreButtonDisabled =
    displayedInvestorsAndPartners.length >= investorAndPartnerList.length;

  const handleClickLoadMore = () => {
    setDisplayedInvestorsAndPartners([
      ...displayedInvestorsAndPartners,
      ...investorAndPartnerList.slice(
        displayedInvestorsAndPartners.length,
        displayedInvestorsAndPartners.length + 3
      ),
    ]);
  };

  return (
    <div
      style={{
        padding: "1.3em",
        width: "100%",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {displayedInvestorsAndPartners.map((investorAndPartner, index) => (
          <InvestorsAndPartnersCard
            key={index}
            name={investorAndPartner.name}
            avatarSrc={investorAndPartner.imageUrl}
            altText={investorAndPartner.name}
          />
        ))}
        {isLoadMoreButtonDisabled ? null : (
          <Grid lg={3} md={4} sm={6} xs={6}>
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
                {investorAndPartnerList.length -
                  displayedInvestorsAndPartners.length +
                  "+ "}
                more
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default DisplayInvestorsAndPartners;
