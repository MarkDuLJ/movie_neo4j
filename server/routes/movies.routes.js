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

export default router;
