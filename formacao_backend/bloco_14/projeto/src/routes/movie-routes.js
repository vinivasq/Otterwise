import { validateRequest } from "../middleware/auth.js";
import * as movieController from "../controllers/movie-controller.js";

export default {
  createMovie: {
    method: "POST",
    url: "/movie",
    preHandler: [validateRequest],
    handler: movieController.createMovie,
  },
};
