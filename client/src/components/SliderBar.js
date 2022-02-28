import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { MovieContext } from "../context";
import List from "../components/List";

const SliderBar = () => {
  const classes = useStyles();
  const [movieContext, setMovieContext] = useContext(MovieContext);
  const min = movieContext[movieContext.length - 1].released;
  const max = movieContext[0].released;
  const [value, setValue] = useState([min, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newMovieArray = movieContext.filter(
      (movie) => movie.released <= newValue
    );
    setMovieContext(newMovieArray);
  };

  const valuetext = (value) => {
    return `Y${value}`;
  };

  return (
    <>
      <List />
      <div className={classes.root}>
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
