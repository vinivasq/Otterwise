import { validateRequest } from "../middleware/auth.js";
import * as movieController from "../controllers/movie-controller.js";

export default {
  listAllMovies: {
    method: "GET",
    url: "/movie",
    handler: movieController.listAll,
  },
  createMovie: {
    method: "POST",
    url: "/movie",
    preHandler: [validateRequest],
    handler: movieController.createMovie,
  },
  editMovie: {
    method: "PATCH",
    url: "/movie",
    preHandler: [validateRequest],
    handler: movieController.editMovie,
  },
};
