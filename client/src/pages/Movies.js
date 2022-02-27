import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DropDownMenu from "../components/DropDownMenu";
import SliderBar from "../components/SliderBar";
import { Box } from "@material-ui/core";
const movieArr = [
  { tagline: "Everything is connected", title: "Cloud Atlas", released: 2012 },
  {
    tagline: "Prepare to enter a secret world of assassins",
    title: "Ninja Assassin",
    released: 2009,
  },
  {
    tagline: "400 million people were waiting for the truth.",
    title: "Frost/Nixon",
    released: 2008,
  },
  { tagline: "Speed has no limits", title: "Speed Racer", released: 2008 },
  {
    tagline:
      "A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire.",
    title: "Charlie Wilson's War",
    released: 2007,
  },
  { tagline: "Freedom! Forever!", title: "V for Vendetta", released: 2006 },
  { tagline: "Break The Codes", title: "The Da Vinci Code", released: 2006 },
  {
    tagline:
      "Based on the extraordinary true story of one man's fight for freedom",
    title: "RescueDawn",
    released: 2006,
  },
  {
    tagline: "This Holiday Season… Believe",
    title: "The Polar Express",
    released: 2004,
  },
  { title: "Something's Gotta Give", released: 2003 },
  {
    tagline: "Everything that has a beginning has an end",
    title: "The Matrix Revolutions",
    released: 2003,
  },
  { tagline: "Free your mind", title: "The Matrix Reloaded", released: 2003 },
  {
    tagline: "At the edge of the world, his journey begins.",
    title: "Cast Away",
    released: 2000,
  },
  {
    tagline: "Pain heals, Chicks dig scars... Glory lasts forever",
    title: "The Replacements",
    released: 2000,
  },
  {
    tagline: "The rest of his life begins now.",
    title: "Jerry Maguire",
    released: 2000,
  },
  {
    tagline: "One robot's 200 year journey to become an ordinary man.",
    title: "Bicentennial Man",
    released: 1999,
  },
  {
    tagline: "Walk a mile you'll never forget.",
    title: "The Green Mile",
    released: 1999,
  },
  {
    tagline: "First loves last. Forever.",
    title: "Snow Falling on Cedars",
    released: 1999,
  },
  { tagline: "Welcome to the Real World", title: "The Matrix", released: 1999 },
  {
    tagline:
      "Can two friends sleep together and still love each other in the morning?",
    title: "When Harry Met Sally",
    released: 1998,
  },
  {
    tagline: "At odds in life... in love on-line.",
    title: "You've Got Mail",
    released: 1998,
  },
  {
    tagline: "After life there is more. The end is just the beginning.",
    title: "What Dreams May Come",
    released: 1998,
  },
  {
    tagline: "A comedy from the heart that goes for the throat.",
    title: "As Good as It Gets",
    released: 1997,
  },
  {
    tagline: "Evil has its winning ways",
    title: "The Devil's Advocate",
    released: 1997,
  },
  {
    tagline: "Don't Breathe. Don't Look Back.",
    title: "Twister",
    released: 1996,
  },
  { tagline: "Come as you are", title: "The Birdcage", released: 1996 },
  {
    tagline:
      "In every life there comes a time when that thing you dream becomes that thing you do",
    title: "That Thing You Do",
    released: 1996,
  },
  {
    tagline: "Houston, we have a problem.",
    title: "Apollo 13",
    released: 1995,
  },
  {
    tagline: "The hottest data on earth. In the coolest head in town",
    title: "Johnny Mnemonic",
    released: 1995,
  },
  {
    tagline:
      "What if someone you never met, someone you never saw, someone you never knew was the only someone for you?",
    title: "Sleepless in Seattle",
    released: 1993,
  },
  {
    tagline: "Once in a lifetime you get a chance to do something different.",
    title: "A League of Their Own",
    released: 1992,
  },
  {
    tagline: "He didn't want law. He wanted justice.",
    title: "Hoffa",
    released: 1992,
  },
  {
    tagline: "It's a hell of a thing, killing a man",
    title: "Unforgiven",
    released: 1992,
  },
  {
    tagline:
      "In the heart of the nation's capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth.",
    title: "A Few Good Men",
    released: 1992,
  },
  {
    tagline: "A story of love, lava and burning desire.",
    title: "Joe Versus the Volcano",
    released: 1990,
  },
  {
    tagline:
      "For some, it's the last real taste of innocence, and the first real taste of life. But for everyone, it's the time that memories are made of.",
    title: "Stand By Me",
    released: 1986,
  },
  {
    tagline: "I feel the need, the need for speed.",
    title: "Top Gun",
    released: 1986,
  },
  {
    tagline: "If he's crazy, what does that make you?",
    title: "One Flew Over the Cuckoo's Nest",
    released: 1975,
  },
];

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
        <Box>
          <DropDownMenu />
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
