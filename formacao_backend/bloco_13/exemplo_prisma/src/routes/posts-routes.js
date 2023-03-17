import * as postController from "../controllers/posts-controller.js";

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: postController.getAll,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
