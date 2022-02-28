import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const SliderBar = ({ movieList, onSlideChange }) => {
  const classes = useStyles();
  // useEffect(() => {}, [movieList]);

  // const min = movieContext[movieContext.length - 1].released;
  // const max = movieContext[0].released;
  const handleChange = (event, newValue) => {
    onSlideChange(newValue);
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
