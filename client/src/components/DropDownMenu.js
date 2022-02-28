import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import neo4jApi from "../api/neo4jApi";

const DropDownMenu = () => {
  const classes = useStyles();
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await neo4jApi.getMoviesList();
        setMovieList(response.map((r) => r.title));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  const handleChange = (event) => {
    setMovieList(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // const arr = Array.from(Array(20).keys());
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Movies</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={movieList}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {movieList.map((movie) => (
            <MenuItem value={movie} key={movie}>
              {movie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default DropDownMenu;
