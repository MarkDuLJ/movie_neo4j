import { Router } from "express";

import { getDriver } from "../neo4j.js";
import PeopleService from "../services/people.service.js";
import NotFoundError from "../errors/not-found.error.js";

const router = new Router();

router.get("/:name", async (req, res, next) => {
  try {
    const driver = getDriver();
    const peopleService = new PeopleService(driver);

    const movies = await peopleService.findByName(req.params.name);
    if (!movies) {
      return next(
        new NotFoundError(
          `person with name:${req.params.name} can't find related movies`
        )
      );
    }

    res.json(movies);
  } catch (e) {
    next(e);
  }
});

export default router;
