import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = ({data:{confirmed,deaths,lastUpdate,recovered}}) => {
  if(!confirmed){
    return 'Loading...'
  }
   console.log(confirmed);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color='textSecondary'> REAL DATE</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">{recovered.value}</Typography>
            <Typography color='textSecondary'> REAL DATE</Typography>
            <Typography variant='body2'>Number of recovery from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color='textSecondary'> REAL DATE</Typography>
            <Typography variant='body2'>Number of deaths cause by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
