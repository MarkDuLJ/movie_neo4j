import React, { useEffect, useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { MovieContext } from "../context";
import { getMoviesByYear } from "../API";
import DropDownMenu from "../components/DropDownMenu";
import SliderBar from "../components/SliderBar";

const Movies = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container spacing={8} className={classes.root}>
        <Grid item key={0} xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <SliderBar />
          </Paper>
        </Grid>
        <Grid item key={1} xs={4} sm={6} md={4}></Grid>
        <Box>{/* <DropDownMenu /> */}</Box>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
  },
  paper: {
    height: 300,
    width: 600,
    alignItems: "stretch",
  },
  slider: {},
  box: {
    alignSelf: "flex-end",
  },
}));

export default Movies;
