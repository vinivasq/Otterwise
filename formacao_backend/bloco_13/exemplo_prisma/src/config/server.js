import Fastify from "fastify";
import postsRoutes from "../routes/posts-routes.js";
import multer from "fastify-multer";

const fastify = Fastify({
  logger: true,
});

fastify.register(multer.contentParser);
fastify.register(postsRoutes);

export default fastify;
