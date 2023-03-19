import * as postController from "../controllers/posts-controller.js";
import multer from "fastify-multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, reply, callback) => {
    callback(null, "public/images");
  },
  filename: (request, file, callback) => {
    const extension = path.extname(file.originalname);
    callback(null, file.originalname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: postController.getAll,
  },

  {
    method: "POST",
    url: "/posts",
    preHandler: upload.single("cover"),
    handler: postController.create,
  },
];

export default (fasify, _, next) => {
  for (let route of routes) {
    fasify.route(route);
  }
  next();
};
