import { Router } from "express";

import movies from "./movies.routes.js";

const router = new Router();
router.use("/movies", movies);

export default router;
