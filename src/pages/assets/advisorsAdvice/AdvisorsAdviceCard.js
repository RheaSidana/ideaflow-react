import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const AdvisorsAdviceCard = ({
  name,
  position,
  pastExperience: message,
  avatarSrc,
  altText,
}) => {
  return (
    <Grid lg={4} md={5} sm={9} xs={9}>
      <Box
        display="flex"
        flexDirection="row"
        sx={{ height: "100%", padding: "1em", width: "100%" }}
      >
        <Card
          sx={{
            background: "linear-gradient(to bottom, #2f4743 0%, #000000 100%)",
            color: "wheat",
            height: "100%",
            borderRadius: 32,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <Avatar
              alt={altText}
              src={avatarSrc}
              sx={{ width: 120, height: 120 }}
            />
            <CardContent>
              <div
                style={{
                  minHeight: "80px",
                }}
              >
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "wheat" }}>
                  {position}
                </Typography>
              </div>
              <Divider sx={{ my: 2, borderColor: "#477068", borderWidth: 2 }} />
              <Typography
                variant="body2"
                sx={{ color: "wheat", minHeight: "90px", padding: "0em 1em" }}
              >
                {message}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default AdvisorsAdviceCard;
