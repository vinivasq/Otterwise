import * as postController from "../controllers/posts-controller.js";

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: postController.getAll,
  },

  {
    method: "POST",
    url: "/posts",
    handler: postController.create,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
