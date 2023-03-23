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
    schema: {
      body: {
        type: "object",
        required: ["title", "content", "authorId"],
        properties: {
          title: { type: "string" },
          content: { type: "string" },
          authorId: { type: "number" },
        },
      },
    },
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
