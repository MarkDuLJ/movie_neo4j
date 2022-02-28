import { Router } from "express";

import { getPagination, MOVIE_SORT } from "../utils.js";
import { getDriver } from "../neo4j.js";
import MovieService from "../services/movie.service.js";
import NotFoundError from "../errors/not-found.error.js";

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const { q, sort, order, limit, skip } = getPagination(req, MOVIE_SORT);

    const movieService = new MovieService(getDriver());

    const movies = await movieService.all(sort, order, limit, skip);

    res.json(movies);
  } catch (e) {
    next(e);
  }
});
router.get("/:title", async (req, res, next) => {
  try {
    const driver = getDriver();
    const movieService = new MovieService(driver);

    const movie = await movieService.findByTitle(req.params.title);
    if (!movie) {
      return next(
        new NotFoundError(`Movie with title:${req.params.title} not found`)
      );
    }

    res.json(movie);
  } catch (e) {
    next(e);
  }
});

export default router;
