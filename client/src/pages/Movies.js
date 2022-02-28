import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import neo4jApi from "../api/neo4jApi";
import DropDownMenu from "../components/DropDownMenu";
import SliderBar from "../components/SliderBar";
import { getMoviesByYear } from "../utils";

const Movies = () => {
  const classes = useStyles();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await neo4jApi.getMoviesList();
        setMovieList(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  const onSlideChange = (newValue) => {
    const newMovieArray = getMoviesByYear(movieList, newValue);
    console.log(newMovieArray);
    setMovieList(newMovieArray);
  };
  if (!movieList.length) return <div>No movies listed</div>;

  return (
    <Container maxWidth="md">
      <Grid container spacing={8} className={classes.root}>
        <Grid item key={0} xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <SliderBar movieList={movieList} onSlideChange={onSlideChange} />
          </Paper>
        </Grid>
        <Grid item key={1} xs={4} sm={6} md={4}></Grid>
        <Box>
          <DropDownMenu movieList={movieList} />
        </Box>
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
