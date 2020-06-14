import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";
import Countup from "react-countup";
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) return "...loading";
  return (
    <div>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                separator=","
                duration="1.5"
              />{" "}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19.{" "}
            </Typography>
          </CardContent>
        </Grid>{" "}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              recovored
            </Typography>
            <Typography variant="h5">
              {" "}
              <Countup
                start={0}
                end={recovered.value}
                separator=","
                duration="1.5"
              />{" "}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>{" "}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              death
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                separator=","
                duration="1.5"
              />{" "}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>{" "}
      </Grid>
    </div>
  );
};

export default Cards;
