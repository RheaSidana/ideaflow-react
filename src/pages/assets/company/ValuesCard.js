import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import AppleIcon from "@mui/icons-material/Apple";

const ValuesCard = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <Grid lg={11} md={11} sm={9} xs={9}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#6cada1",
            // color: "wheat",
            height: "100%",
            width: "95%",
            padding: "1em",
            borderTopRightRadius: 46,
            borderBottomLeftRadius: 46,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              style={{
                textAlign: "center",
                // fontFamily: '"Lucida Console", monospace',
                fontFamily: '"Bitstream Cyberbit", serif',
                // fontFamily: '"Cottonwood", fantasy',
              }}
            >
              {
                "We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence."
              }
            </Typography>
            {/* <Typography variant="body2">{description}</Typography> */}
          </CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              width: "106%",
              backgroundColor: "#477068",
              // backgroundColor: "grey",
              padding: "1em",
              margin: "1em",
              borderTopRightRadius: 36,
              borderBottomLeftRadius: 36,
            }}
          >
            <div style={{ width: "100%", height: "auto", margin: "0.3em 0em" }}>
              <Button
                variant="contained"
                style={{
                  color: "#6cada1",
                  backgroundColor: "black",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1.3em",
                  textAlign: "justify",
                  borderRadius: 17,
                }}
                onClick={() => {
                  // window.open(url, "_blank");
                  window.open("https://ideaflow.app/", "_blank");
                }}
              >
                {"Try Ideaflow Notes"}
              </Button>
            </div>
            <div style={{ width: "100%", height: "auto", margin: "0.3em 0em" }}>
              <Button
                variant="text"
                style={{
                  color: "black",
                  fontWeight: 900,
                  fontSize: "1.3em",
                  textTransform: "none",
                }}
                onClick={() => {
                  window.open(
                    "https://apps.apple.com/us/app/ideaflow-notes/id6463830566",
                    "_blank"
                  );
                }}
              >
                <AppleIcon />
                {"iOS"}
              </Button>
            </div>
            <div style={{ width: "100%", height: "auto", margin: "0.3em 0em" }}>
              <Button
                variant="text"
                style={{
                  color: "black",
                  fontWeight: 900,
                  fontSize: "1.3em",
                  textTransform: "none",
                }}
                onClick={() => {
                  window.open(
                    "https://zesty-echo-8fc.notion.site/Ideaflow-Onboarding-Quickstart-Guide-34f45fb3dd9f49e381cd161c32afa94e",
                    "_blank"
                  );
                }}
              >
                {"Guide"}
              </Button>
            </div>
            <div style={{ width: "100%", height: "auto", margin: "0.3em 0em" }}>
              <Button
                variant="text"
                style={{
                  color: "black",
                  fontWeight: 900,
                  fontSize: "1.3em",
                  textTransform: "none",
                }}
                onClick={() => {
                  window.open(
                    "https://twitter.com/i/flow/login?redirect_after_login=%2FIdeaFlowGraphs",
                    "_blank"
                  );
                }}
              >
                {"Twitter"}
              </Button>
            </div>
            <div style={{ width: "100%", height: "auto", margin: "0.3em 0em" }}>
              <Button
                variant="text"
                style={{
                  color: "black",
                  fontWeight: 900,
                  fontSize: "1.3em",
                  textTransform: "none",
                }}
                onClick={() => {
                  window.open(
                    "https://kaib430d7vl.typeform.com/to/cg7ZCvD9?typeform-source=www.ideaflow.io",
                    "_blank"
                  );
                }}
              >
                {"Newsletter"}
              </Button>
            </div>
          </div>
        </Card>
      </Box>
    </Grid>
  );
};

export default ValuesCard;
