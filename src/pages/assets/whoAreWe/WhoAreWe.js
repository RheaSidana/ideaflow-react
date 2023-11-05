import React from 'react';
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useConstants from '../../../useConstants';

const WhoAreWe = () => {
    const {WhoAreWeText: WhoAreWe} = useConstants();
    return (
        <Grid lg={6} md={10} sm={10} xs={10}>
        <Paper
          style={{
            textAlign: "center",
            height: "vh*.8",
            padding: "3em",
            margin: "2em 3em 2em 3em",
            backgroundColor: "#20302d",
            color: "wheat",
          }}
        >
          <Typography variant="subtitle1" >
            {WhoAreWe}
          </Typography>
        </Paper>
      </Grid>
    )
}

export default WhoAreWe;