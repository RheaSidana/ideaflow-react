import React from 'react'
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ContactContainerContent = ({ icon, text, btn }) => {
    return (
        <Grid container spacing={2}>
          <Grid>
            <ButtonBase sx={{ width: 68, height: 68, backgroundColor: "grey" }}>
                {icon}
            </ButtonBase>
          </Grid>
          <Grid
            xs={12}
            sm
            container
            style={{
              disply: "flex",
              direction: "row",
              alignItems: "center",
            }}
          >
            <Grid xs>
              <Typography gutterBottom variant="h5" component="div">
                {text}
              </Typography>
            </Grid>
            <Grid>
              {btn}
            </Grid>
          </Grid>
        </Grid>
      );
}

export default ContactContainerContent;