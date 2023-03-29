import * as usersController from "../controllers/users-controller.js";
import { validateRequest } from "../middleware/auth.js";

const routes = [
  {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: usersController.getAll,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
