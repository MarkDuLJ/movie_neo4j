import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

// import List from "../components/List";
import neo4jApi from "../api/neo4jApi";

const SliderBar = () => {
  const classes = useStyles();
  const getMovies = async () => {
    try {
      const response = await neo4jApi.getMoviesList();
      setMovieList(response);
    } catch {
      console.log("error");
    }
  };
  const array = getMovies();
  const [movieList, setMovieList] = useState(array);
  useEffect(() => {
    console.log("redddd....");
  }, [movieList]);
  // const min = movieContext[movieContext.length - 1].released;
  // const max = movieContext[0].released;
  const handleChange = (event, newValue) => {
    const newMovieArray = movieList.filter(
      (movie) => movie.released <= newValue
    );
    console.log(newMovieArray);
    setMovieList(newMovieArray);
  };

  const valuetext = (value) => {
    return `Y${value}`;
  };

  return (
    <>
      <div className={classes.root}>
        <Typography gutterBottom>
          Now we have total {movieList.length} movies
        </Typography>
        <Typography id="range-slider" gutterBottom>
          Choose Year Range
        </Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={1977}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={1975}
          max={2012}
          onChangeCommitted={handleChange}
        />
      </div>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default SliderBar;
