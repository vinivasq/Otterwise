import { validateRequest } from "../middleware/auth.js";
import * as movieController from "../controllers/movie-controller.js";

export default {
  listMovie: {
    method: "GET",
    url: "/movie",
    handler: movieController.listMovie,
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

  deleteMovie: {
    method: "DELETE",
    url: "/movie",
    preHandler: [validateRequest],
    handler: movieController.deleteMovie,
  },
};
