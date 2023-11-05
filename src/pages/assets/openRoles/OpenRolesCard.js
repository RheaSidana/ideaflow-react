import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import { Button, Typography, Divider } from "@mui/material";

const OpenRolesCard = ({
  opening,
  aboutCompany,
  weOffer,
  additionals,
  role,
  applyNow,
}) => {
  const handleApplyNow = () => {
    const url = opening.ApplyNow; 

    window.open(url, "_blank");
  }
  return (
    <Grid lg={11} md={10} sm={12} xs={12}>
      <div
        style={{
          width: "100%",
          height: "auto",
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
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "1.5em", width: "100%", height: "auto" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "80%", height: "80%" }}
          >
            <Box style={{ flex: 1 }}>
              <Typography variant="h5">{opening.Role}</Typography>
            </Box>
            <Box style={{ flex: 1, height: "50px" }}>
              <Box
                sx={{ width: "2px", height: "90%", display: "inline-block" }}
              >
                <Divider
                  orientation="vertical"
                  sx={{ mx: 2, borderColor: "#454747", borderWidth: 3 }}
                />
              </Box>
            </Box>
            <Box
              style={{ flex: 1 }}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "80%", height: "80%" }}
            >
              <Box style={{ flex: 1 }}>
                <Typography variant="body1">{opening.Type}</Typography>
              </Box>
              <Box style={{ flex: 1, height: "50px", padding: "0em 1.5em" }}>
                <Box
                  sx={{ width: "2px", height: "90%", display: "inline-block" }}
                >
                  <Divider
                    orientation="vertical"
                    sx={{ mx: 2, borderColor: "#454747", borderWidth: 3 }}
                  />
                </Box>
              </Box>
              <Box style={{ flex: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#454747",
                    fontFamily: '"Georgia", serif',
                    marginLeft: "1em",
                  }}
                  onClick={handleApplyNow}
                >
                  ApplyNow
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Divider sx={{ my: 3, borderColor: "#454747", borderWidth: 2 }} />
          </Box>
          <Box>
            <Typography variant="body1">{opening.JobDescription}</Typography>
          </Box>
        </Box>
      </div>
    </Grid>
  );
};

export default OpenRolesCard;
