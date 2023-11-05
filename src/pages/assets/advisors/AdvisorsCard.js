import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const AdvisorsCard = ({ name, position, avatarSrc, altText }) => {
  return (
    <Grid lg={8} md={5} sm={9} xs={9}>
      <Box
        display="flex"
        flexDirection="row"
        sx={{ height: "100%", padding: "1em", width: "100%" }}
      >
        <Card
          sx={{
            background: "linear-gradient(to bottom, #477068 0%, #000000 100%)",
            color: "wheat",
            height: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <Avatar
              alt={altText}
              src={avatarSrc}
              sx={{
                width: 120,
                height: 120,
                padding: "2em",
                paddingRight: "0.5em",
              }}
            />
            <Box sx={{ width: "2px", height: "70%", display: "inline-block" }}>
              <Divider
                orientation="vertical"
                sx={{ mx: 2, borderColor: "#477068", borderWidth: 2 }}
              />
            </Box>
            <Box sx={{ width: "350px", padding: "1em" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "700",
                    fontFamily: "monospace",
                    fontSize: "2.2em",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "wheat", fontFamily: "cursive" }}
                >
                  {position}
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default AdvisorsCard;
