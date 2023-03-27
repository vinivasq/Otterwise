import * as usersController from "../controllers/users-controller.js";

const routes = [
  {
    method: "GET",
    url: "/users",
    handler: postController.getAll,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
