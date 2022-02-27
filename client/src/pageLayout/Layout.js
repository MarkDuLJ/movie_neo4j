import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Footer from "./Footer";
import Head from "./Head";
import TabBar from "../components/TabBar";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Movies App
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This app has a movie selector dropdown populated with all movies
              in the Neo4j instance listed, a date range slider that will update
              the list based on movies released between the 2 years selected and
              other functions, please take a look!
            </Typography>
          </Container>
          <TabBar />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 4),
  },
}));

export default Layout;
