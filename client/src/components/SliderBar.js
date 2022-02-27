import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const SliderBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState([1976, 2012]);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `Y${value}`;
  };

  return (
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
  );
};

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default SliderBar;
