import { Router } from "express";

import movies from "./movies.routes.js";
import people from "./people.routes.js";

const router = new Router();
router.use("/movies", movies);
router.use("/people", people);

export default router;
