import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useOpenRoles from "../assets/openRoles/useOpenRoles";
import { useParams } from "react-router-dom";
import Description from "./Description";

const JobDescription = () => {
  const { ApplyNow } = useParams();
  const { openings, applyNow } = useOpenRoles();

  const findOpening = () =>
    openings.find((opening) => opening.ApplyNow === "/" + ApplyNow);

  const opening = findOpening();

  const handleApplyNow = () => {
    window.open(applyNow, "_blank");
  };

  return (
    <>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Paper
          style={{
            marginTop: "4em",
            height: "40%",
            padding: "2em",
            backgroundColor: "#20302d",
            display: "flex",
            justifyContent: "center",
            color: "wheat",
          }}
        >
          <Typography variant="h2" style={{ fontFamily: "cursive" }}>
            {opening.Role}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft="2.5em"
          >
            <Button
              variant="contained"
              size="large"
              style={{
                color: "#20302d",
                backgroundColor: "wheat",
                fontFamily: '"Lucida Handwriting", cursive',
                width: "70%",
                height: "80px",
                padding: ".5em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.4em",
                fontWeight: 800,
                borderRadius: 66,
                textTransform: "none",
                minWidth: "150px",
              }}
              onClick={handleApplyNow}
            >
              Apply Now
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Description opening={opening} handleApplyNow={handleApplyNow} />
    </>
  );
};

export default JobDescription;
