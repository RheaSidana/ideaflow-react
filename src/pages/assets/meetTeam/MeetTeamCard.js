import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import LinkButton from "../../../assets/LinkButton";
import { LinkedIn, Twitter } from "@mui/icons-material";

const MeetTeamCard = ({
  name,
  position,
  pastExperience,
  avatarSrc,
  altText,
}) => {
  return (
    <Grid lg={3} md={5} sm={9} xs={9}>
      <Box display="flex" sx={{ height: "100%", width: "100%" }}>
        <Card
          sx={{
            background: "linear-gradient(to bottom, #2f4743 0%, #000000 100%)",
            color: "wheat",
            height: "auto",
            width: "100%",
            borderRadius: 35,
            padding: "0.5em",
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
              <div style={{ minHeight: "40%" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {name}
                </Typography>
                <Typography variant="subtitle3" sx={{ color: "wheat" }}>
                  {position}
                </Typography>
              </div>
              <Divider sx={{ my: 2, borderColor: "#477068", borderWidth: 2 }} />
              <LinkButton
                url={"https://www.linkedin.com/company/ideaflow-inc/about/"}
                icon={<LinkedIn />}
              />
              <LinkButton
                url={"https://twitter.com/ideaflowgraphs"}
                icon={<Twitter />}
              />
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default MeetTeamCard;
